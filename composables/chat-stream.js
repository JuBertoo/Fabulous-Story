// composables/chat-stream.js
const resolveStream = async ({
  data,
  onChunk = () => {},
  onReady = () => {},
  stream,
}) => {
  const reader = stream.pipeThrough(new TextDecoderStream()).getReader()
  while (true) {
    const stream = await reader.read()
    if (stream.done) break

    const chunks = stream?.value
      .replaceAll(/^data: /gm, '')
      .split('\n')
      .filter((c) => Boolean(c.length) && c !== '[DONE]')
      .map((c) => {
        try {
          return JSON.parse(c)
        } catch (error) {
          console.error('Erreur lors de la conversion en JSON : ', error)
          console.log('Données non convertibles : ', c)
          return null
        }
      })
      .filter((c) => c !== null)

    for (const chunk of chunks) {
      const content = chunk.choices[0].delta.content
      if (!content) continue
      data.value += chunk.choices[0].delta.content
      onChunk({ data: content })
    }
  }

  onReady({ data: data.value })
}

export const useChatStream = ({
  onChunk = () => {},
  onReady = () => {},
  stream,
}) => {
  const data = ref('')

  resolveStream({
    data,
    onChunk,
    onReady,
    stream,
  })

  return {
    data: readonly(data),
  }
}
