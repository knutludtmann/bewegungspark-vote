import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import router from './router'
import './index.css'
import {createDynamicForms} from '@asigloo/vue-dynamic-forms';
import {firestorePlugin} from 'vuefire'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faAt, faArrowRight} from "@fortawesome/free-solid-svg-icons"


library.add(faFacebook, faAt, faTwitter, faArrowRight, faInstagram)


const VueDynamicForms = createDynamicForms();

const store = createStore({
    state() {
        return {
            sport: [],
            behindertengerecht: '',
            skill: '',
            frequency: '',
            postcode: '',
        }
    },
    getters: {
        entries: state => {
            return state;
        }
    },
    mutations: {
        setSport(state, type) {
            state.sport.push(state, type)
        },
        clearSport(state) {
            state.sport = [];
        },
        setBehindertengerecht(state, type) {
            state.behindertengerecht = type;
        },
        clearBehindertengerecht(state) {
            state.behindertengerecht = '';
        },
        setSkill(state, type) {
            state.skill = type;
        },
        clearSkill(state) {
            state.skill = '';
        },
        setFrequency(state, type) {
            state.frequency = type;
        },
        clearFrequency(state) {
            state.frequency = '';
        },
        setPostcode(state, type) {
            state.postcode = type;
        },
        clearPostcode(state) {
            state.postcode = '';
        },
    }
})

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(VueDynamicForms)
    .use(firestorePlugin)
    .mount('#app')
