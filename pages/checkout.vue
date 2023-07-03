<template>
  <div>
    <h1>Page de paiement</h1>
    <div>
      <label v-for="(item, index) in subscriptions" :key="index">
        <input
          v-model="selectedSubscription"
          type="radio"
          name="subscription"
          :value="item"
        />
        {{ item.attributes.title }} - {{ item.attributes.price }}
      </label>
    </div>
    <button
      class="cursor-pointer"
      :disabled="!selectedSubscription"
      @click="processPayment"
    >
      Procéder au paiement
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadStripe } from '@stripe/stripe-js'
const runtimeConfig = useRuntimeConfig()
const user = useSupabaseUser()
const selectedSubscription = ref(null)
const $stripe = ref(null)

onMounted(async () => {
  console.log(
    'runtimeConfig.public.stripePublicKey',
    runtimeConfig.public.stripePublicKey
  )
  console.log('runtimeConfig.stripePublicKey', runtimeConfig.stripePublicKey)
  $stripe.value = await loadStripe(runtimeConfig.public.stripePublicKey) // Remplacez 'pk_test_12345' par votre clé publique Stripe.
})

const processPayment = async () => {
  try {
    const { data, error } = await useFetch('/api/checkout', {
      method: 'post',
      body: {
        priceId: selectedSubscription.value.attributes.stripePriceId,
        subscriptionId: selectedSubscription.value.id,
        userId: user.value.id,
        userEmail: user.value.email,
      },
    })
    if (data.error) {
      throw new Error(data.error)
    }
    await $stripe.value.redirectToCheckout({ sessionId: data.value.id })
  } catch (err) {
    console.error('Une erreur est survenue:', err)
  }
}
</script>
