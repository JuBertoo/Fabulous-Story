import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser'

export async function OpenAIStream(payload) {
  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  let counter = 0
  console.log('payload', payload)
  const requestHeaders = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ''}`,
  }
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: requestHeaders,
    method: 'POST',
    body: JSON.stringify(payload),
  })
  // console.log('res', res)
  // const responseText = await res.text()
  // console.log('responseText', responseText)

  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event) {
        if (event.type === 'event') {
          const data = event.data
          console.log('data', data)
          if (data === '[DONE]') {
            console.log('DONE')
            controller.close()
            return
          }
          try {
            console.log('try')
            const json = JSON.parse(data)
            const text = json.choices[0].delta?.content || ''
            console.log('text', text)
            if (counter < 2 && (text.match(/\n/) || []).length) {
              return
            }
            const queue = encoder.encode(text)
            console.log('queue', queue)
            controller.enqueue(queue)
            counter++
          } catch (e) {
            controller.error(e)
          }
        }
      }

      const parser = createParser(onParse)
      for await (const chunk of res.body) {
        parser.feed(decoder.decode(chunk))
      }
    },
  })
  console.log('STREAM UtILS', stream)

  return res.body
}
