![Pinia cover](/assets/images/state-management/pinia-cover.jpg)
# 🚀 State Management in Vue 3 with Pinia

Pinia is a state management library for Vue 3 that provides a simple and powerful way to manage your application's state. It's built on top of the new Vue 3 reactivity API and provides a flexible and scalable architecture for managing state in your Vue 3 applications

Learn how to manage global state in your Vue 3 apps with Pinia — the modern, intuitive alternative to Vuex.

## 📌 Why You Need State Management
![global state](/assets/images/state-management/global-state.png)
When building Vue apps, you’ll often need to share data across multiple components (like user info, cart data, or app settings). While props and emits are great for simple communication, they fall short as your app grows.

That's where state management comes in.

## 🍍 What is Pinia?
![Pinia State](/assets/images/state-management/pinia-state.png)
`Pinia` is the official state management library for Vue 3. It's:

- Lightweight and modular

- Built using the Composition API

- TypeScript-friendly

- Easier to use than Vuex
![Pinia advantages](/assets/images/state-management/pinia-advantages.png)

Pinia was created by Eduardo San Martin Morote, the same developer behind Vue Router.

## 🚀 Getting Started with Pinia

`1. Install Pinia`

```javascript
npm install pinia
```

`2. Create a Pinia Store`

Set up the Pinia plugin in your main file (main.js or main.ts):

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

`3. Define Your Store`

Create a file: stores/user.js

```javascript
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Gokul',
    isLoggedIn: false,
  }),
  getters: {
    welcomeMessage: (state) => `Welcome, ${state.name}!`
  },
  actions: {
    login(name) {
      this.name = name
      this.isLoggedIn = true
    },
    logout() {
      this.name = ''
      this.isLoggedIn = false
    }
  }
})
```

`4. Using the Store in a Component`
```javascript
<template>
  <div>
    <h2>{{ userStore.welcomeMessage }}</h2>
    <button @click="userStore.login('Jane')">Login</button>
    <button @click="userStore.logout()">Logout</button>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
</script>
```

`5. Advanced Tips`
 - 🔄 Persist Your Store
    - Use a plugin like pinia-plugin-persistedstate:

    ```javascript
    npm install pinia-plugin-persistedstate
    ```

    - use this peristedstate in your pinia

    ```javascript
    import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
    pinia.use(piniaPluginPersistedstate)
    ```

    - Then in your store:

    ```javascript
    export const useUserStore = defineStore('user', {
    // ...state, actions, etc.
    persist: true
    })
    ```
![pinia working](/assets/images/state-management/pinia-working.png)

## 🧪 Testing a Store

- You can test your Pinia stores in isolation:

    ```javascript
    import { setActivePinia, createPinia } from 'pinia'
    import { useUserStore } from '@/stores/user'

    describe('User Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('logs in a user', () => {
        const store = useUserStore()
        store.login('John')
        expect(store.name).toBe('John')
        expect(store.isLoggedIn).toBe(true)
    })
    })
    ```

## Conclusion
`Pinia` brings a clean, modern approach to state management in Vue 3. It reduces boilerplate, improves dev experience, and integrates beautifully with the Composition API.
![pinia conclusion](/assets/images/state-management/pinia+vuejs.png)

If you’re starting a new Vue 3 project or migrating from Vuex — Pinia is the way to go. 🍍
