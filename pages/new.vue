<template>
  <div class="w-4/5 mx-auto md:w-1/2 text-center my-12 overflow-hidden">
    <form ref="form">
      <h2 class="font-bold text-2xl md:text-4xl mt-5">Créer ton histoire</h2>
      <div>
        <input
          v-model="prompt"
          name="Title"
          type="text"
          placeholder="title"
          class="p-3 my-3 border w-full"
        />
      </div>
      <div>
        <button class="cloudy-button" @click.prevent="generateStory">
          Create
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
const { create } = useStrapi4()
const { find } = useStrapi()
const prompt = ref('')
const fileInput = ref('')
const user = useStrapiUser()
const getStory = async () => {
  console.log('generateStory')
  const res = await find('stories')
  console.log('response', res)
}
console.log('user', user.value)

const generateStory = async () => {
  console.log('generateStory')
  const response = await create('stories', {
    prompt: 'un panda roux super hero',
    userId: user.value.id,
  })
  console.log('response', response)
}
</script>

<style>
.cloudy-button {
  position: relative;
  background-color: #3498db;
  border: none;
  color: white;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 50px;
  overflow: hidden;
}

.cloudy-button::before, .cloudy-button::after {
  content: "";
  background: #3498db;
  position: absolute;
}

.cloudy-button::before {
  width: 70px;
  height: 70px;
  top: -10px;
  left: -30px;
  border-radius: 50%;
}

.cloudy-button::after {
  width: 120px;
  height: 120px;
  top: -50px;
  right: -60px;
  border-radius: 50%;
}

.cloudy-button:hover {
  background-color: #2980b9;
}

.cloudy-button:hover::before, .cloudy-button:hover::after {
  background-color: #2980b9;
}

</style>
