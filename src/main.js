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
            currentClientIp:''
        }
    },
    getters: {
        entries: state => {
            return state;
        },
        getCurrentClientIp: state => {
            return state.currentClientIp;
        }
    },
    mutations: {
        setCurrentClientIp(state) {
            function json(url) {
                return fetch(url).then(res => res.json());
            }

            let apiKey = '7ad3d600b4460ad46f4c5ebbc6e21fa1a4553a408fe57b96c8baeb0a';
            json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
                // console.log('set ip to state:', data.ip);
                state.currentClientIp = data.ip;
            });

        },
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
    },
})

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(store)
    .use(router)
    .use(VueDynamicForms)
    .use(firestorePlugin)
    .mount('#app')
