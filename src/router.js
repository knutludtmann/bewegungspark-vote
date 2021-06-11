import { createRouter, createWebHistory } from 'vue-router'
import Intro from './components/Intro.vue'
import Done from './components/Done.vue'
import Survey01 from './components/Survey-01.vue'
import Survey02 from './components/Survey-02.vue'
import Survey003 from './components/Survey-003.vue'
import Survey0004 from './components/Survey-0004.vue'
import Survey00005 from './components/Survey-00005.vue'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: `/`,
      name: `intro`,
      component: Intro,
      meta: { transitionName: 'slide' },
    },
    {
      path: `/done`,
      name: `done`,
      component: Done,
    },
    {
      path: `/schritt-1`,
      name: `schritt-1`,
      component: Survey01,
      meta: { transitionName: 'slide' },
    },
    {
      path: `/schritt-02`,
      name: `schritt-02`,
      component: Survey02,
      meta: { transitionName: 'slide' },
    },
    {
      path: `/schritt-003`,
      name: `schritt-003`,
      component: Survey003,
      meta: { transitionName: 'slide' },
    },
    {
      path: `/schritt-0004`,
      name: `schritt-0004`,
      component: Survey0004,
      meta: { transitionName: 'slide' },
    },
    {
      path: `/schritt-00005`,
      name: `schritt-00005`,
      component: Survey00005,
      meta: { transitionName: 'slide' },
    }
  ],
  mode: 'history',
})
