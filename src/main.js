import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router'
import './index.css'
import {createDynamicForms} from '@asigloo/vue-dynamic-forms';

const VueDynamicForms = createDynamicForms();


const store = createStore({
  state () {
    return {
      sport: [],
      skill: '',
      frequency: '',
      postcode: '',
    }
  },
  mutations: {
    setSport(state, type) {
      state.sport.push(state, type)
    },
    clearSport(state) {
      state.sport = [];
    },
    setSkill(state, type) {
      state.skill.push(state, type)
    },
    clearSkill(state) {
      state.skill = [];
    },
    setFrequency(state, type) {
      state.frequency.push(state, type)
    },
    clearFrequency(state) {
      state.frequency = [];
    },
    setPostcode(state, type) {
      state.postcode.push(state, type)
    },
    clearPostcode(state) {
      state.postcode = [];
    }
  }
})

createApp(App)
  .use(store)
  .use(router)
  .use(VueDynamicForms)
  .mount('#app')

