<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <!--
  This example requires updating your template:

  ```
  <html class="h-full bg-gray-900">
  <body class="h-full">
  ```
-->
  <div>
    <div class="xl:pl-72">
      <main>
        <header class="border-b border-white/5">
          <!-- Secondary navigation -->
          <nav class="flex overflow-x-auto py-4">
            <ul
              role="list"
              class="flex min-w-full flex-none gap-x-6 px-4 text-sm font-semibold leading-6 text-gray-400 sm:px-6 lg:px-8"
            >
              <li>
                <a href="#" class="text-indigo-400">Account</a>
              </li>

              <li>
                <a href="#" class="">Notifications</a>
              </li>

              <li>
                <a href="#" class="">Billing</a>
              </li>

              <li>
                <a href="#" class="">Teams</a>
              </li>

              <li>
                <a href="#" class="">Integrations</a>
              </li>
            </ul>
          </nav>
        </header>

        <!-- Settings forms -->
        <div class="divide-y divide-white/5">
          <div
            class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
          >
            <div>
              <h2 class="text-base font-semibold leading-7 text-white">
                Personal Information
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-400">
                Use a permanent address where you can receive mail.
              </p>
            </div>

            <form class="md:col-span-2">
              <div
                class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
              >
                <div class="col-span-full flex items-center gap-x-8">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    class="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                  />
                  <div>
                    <button
                      type="button"
                      class="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
                    >
                      Change avatar
                    </button>
                    <p class="mt-2 text-xs leading-5 text-gray-400">
                      JPG, GIF or PNG. 1MB max.
                    </p>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium leading-6 text-white"
                    >First name</label
                  >
                  <div class="mt-2">
                    <input
                      id="first-name"
                      type="text"
                      name="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium leading-6 text-white"
                    >Last name</label
                  >
                  <div class="mt-2">
                    <input
                      id="last-name"
                      type="text"
                      name="last-name"
                      autocomplete="family-name"
                      class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-white"
                    >Email address</label
                  >
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="username"
                    class="block text-sm font-medium leading-6 text-white"
                    >Username</label
                  >
                  <div class="mt-2">
                    <div
                      class="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                    >
                      <span
                        class="flex select-none items-center pl-3 text-gray-400 sm:text-sm"
                        >example.com/</span
                      >
                      <input
                        id="username"
                        type="text"
                        name="username"
                        autocomplete="username"
                        class="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
                      />
                    </div>
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="timezone"
                    class="block text-sm font-medium leading-6 text-white"
                    >Timezone</label
                  >
                  <div class="mt-2">
                    <select
                      id="timezone"
                      name="timezone"
                      class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    >
                      <option>Pacific Standard Time</option>
                      <option>Eastern Standard Time</option>
                      <option>Greenwich Mean Time</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="mt-8 flex">
                <button
                  type="submit"
                  class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div
            class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
          >
            <div>
              <h2 class="text-base font-semibold leading-7 text-white">
                Log out other sessions
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-400">
                Please enter your password to confirm you would like to log out
                of your other sessions across all of your devices.
              </p>
            </div>

            <form class="md:col-span-2">
              <div
                class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
              >
                <div class="col-span-full">
                  <label
                    for="logout-password"
                    class="block text-sm font-medium leading-6 text-white"
                    >Your password</label
                  >
                  <div class="mt-2">
                    <input
                      id="logout-password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      class="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-8 flex">
                <button
                  type="submit"
                  class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Log out other sessions
                </button>
              </div>
            </form>
          </div>

          <div
            class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
          >
            <div>
              <h2 class="text-base font-semibold leading-7 text-white">
                Delete account
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-400">
                No longer want to use our service? You can delete your account
                here. This action is not reversible. All information related to
                this account will be deleted permanently.
              </p>
            </div>

            <div class="flex items-start md:col-span-2">
              <button
                class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400"
                @click="redirectToPortal"
              >
                Manage my account
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const user = useStrapiUser()

onMounted(() => {
  // console.log('user order', user.value.order.stripeCustomerId)
})

const redirectToPortal = async () => {
  try {
    const { data, error } = await useFetch('/api/customer-portal-session', {
      method: 'post',
      body: {
        customerId: user.value.order.stripeCustomerId,
      },
    })
    if (data.error) {
      throw new Error(data.error)
    }
    console.log('data', data.value)
    console.log('data', data.value.url)
    const portalUrl = data.value.url
    // Redirect the user to the portal
    window.location.href = portalUrl
  } catch (error) {
    console.error('Error fetching portal URL:', error)
  }
}
</script>

<style lang="scss" scoped></style>
