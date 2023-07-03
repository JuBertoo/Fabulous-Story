<template>
  <div id="Select">
    <!-- <label v-if="field.label" :for="field.name" class="label">
      {{ field.translate[$i18n.locale].label }} {{ field.required ? '*' : '' }}
    </label> -->
    <div class="Select_wrapper h-10" @click="onDropDown">
      <p class="text-center">
        {{ value.name }}
      </p>
      <div
        :style="
          isDropDown ? 'transform: rotate(-90deg)' : 'transform: rotate(90deg)'
        "
        class="rotate-IE transition-transform duration-500 ease-in-out transform absolute right-3"
      >
        <svg
          class="w-2.5 fill-current text-colorMain"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 7.51 13.16"
        >
          <path d="M.8 0L0 .78l5.92 5.8L0 12.38l.8.78 6.71-6.58L.8 0z" />
        </svg>
      </div>
    </div>
    <!-- Options part -->
    <section class="absolute top-full pointer flex justify-center w-auto">
      <transition name="dropdown" appear class="w-full">
        <div
          v-if="isDropDown"
          class="Select-open flex flex-col relative z-20 max-w-full w-full overflow-y-hidden px-4 py-3 border border-white divide-y bg-white"
        >
          <p
            v-for="(option, index) in options"
            :key="option + index"
            class="flex justify-center items-center transition duration-300 ease-in-out py-2 cursor-pointer"
            @click="
              onSelectedOption({
                name: rt(option.name),
                shortDescription: rt(option.shortDescription),
                longDescription: rt(option.longDescription),
              })
            "
          >
            <span>{{ rt(option.name) }}</span>
            <span v-if="rt(option.shortDescription).length">{{
              ' : ' + rt(option.shortDescription)
            }}</span>
          </p>
        </div>
      </transition>
    </section>
  </div>
</template>

<script setup>
const { tm, rt, t } = useI18n()
const emit = defineEmits(['typeChange'])
const props = defineProps({
  value: {
    type: Object,
    default: () => {},
  },
  options: {
    type: Object,
    default: () => {},
  },
})

const isDropDown = ref(false)
const selectedOption = ref('')

const onSelectedOption = (option) => {
  selectedOption.value = option
  isDropDown.value = false
  console.log('selectedOption.value', selectedOption.value)
  emit('typeChange', {
    value: selectedOption.value,
  })
}

const onDropDown = () => {
  isDropDown.value = !isDropDown.value
}
</script>

<style>
#Select {
  @apply w-full flex flex-col relative;
  & label {
    @apply text-xs pb-2;
  }
}
.Select_wrapper {
  @apply w-full z-50 flex items-center justify-center relative transition duration-150 ease-in-out cursor-pointer  border border-white bg-gray-400 px-3 py-2;
}
.Select,
.Select-open {
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.Select {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
</style>
