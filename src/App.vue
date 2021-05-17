<template>
  <div class="flex flex-col h-screen">
    <Chat v-if="!isLogin" />
    <Navigation v-if="!isLogin" />
    <div class="flex-1">
      <Breadcrumbs v-if="!isLogin" />
      <main class="bg-white overflow-y-auto">
        <div class="mx-auto py-5 px-4">
          <div class="relative flex flex-col">
            <Dashboard />
            <!-- <router-view /> -->
          </div>
        </div>
      </main>
    </div>
    <Footer v-if="!isLogin" />
  </div>
</template>

<script>
import Chat from '/src/components/Chat.vue'
import Navigation from '/src/components/Navigation.vue'
import Breadcrumbs from '/src/components/Breadcrumbs.vue'
import Footer from '/src/components/Footer.vue'
import Dashboard from './components/Dashboard.vue'

export default {
  components: {
    Chat,
    Navigation,
    Breadcrumbs,
    Footer,
    Dashboard
  },
  methods: {
    show_chat() {
      console.log('test 2')
    }
  },
  computed: {
    isLogin() {
      return this.$route.name === 'Login'
    }
  }
}
const show_chat = function() {
    console.log('test 2')
  }
</script>
