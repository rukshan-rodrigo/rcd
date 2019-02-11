import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    aboutShow: false, // Show or hide About menu
    intro: 'Welcome to the RDC TRIVIA!',
    // categories: [], // trivia categories
    // currentCategory: { // chosen category
    //   name: 'Random',
    //   id: 9,
    // },
    // currentView: 'app-intro',
    // questions: [], // current list of questions in game
    // isGameOver: false, // game state
    // isPaused: false,
    // round: 0, // round counter, starts at 0, ends at 9. Linked to display of current question
    // scores: {
    //   playerOne: {
    //     history: [],
    //     total: 0,
    //   },
    //   playerTwo: {
    //     history: [],
    //     total: 0,
    //   }
    // },
    // solo: true, // Game mode, solo or multiplayer?
    // starPower: false, // show starPower animation
  },
  mutations: {
    // Toggle display of about menu
    aboutToggle(state) {
      state.aboutShow = !state.aboutShow;
    },
  }
});

