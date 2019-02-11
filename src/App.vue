<template>
  <div id="app">
    <header>
      <h1>RCD Trivia</h1>
    </header>

    <div class="about-button" @click="aboutToggle">
      <transition name="fade" mode="out-in">
        <i class="material-icons icon-menu" v-if="!aboutShow" key="menu">Open</i>
        <i class="material-icons icon-close" v-else key="close">Close</i>
      </transition>
    </div>

      <transition name="expand" mode="out-in">
          <Intro msg="Welcome to the RCD Trivia" v-if="aboutShow" />
      </transition>

      <input :value="message" @input="updateMessage">


  </div>
</template>

<script>
import Intro from './components/Intro.vue'

export default {
  name: 'app',
  components: {
    Intro
  },
  computed: {
    aboutShow() {
      return this.$store.state.aboutShow;
    },
    ...mapState({
      message: state => state.obj.message
    })
  },

  methods: {
    aboutToggle() {
      this.$store.commit('aboutToggle');
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
