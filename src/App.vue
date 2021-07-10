<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script>

import {db} from "./db";

export default {
  components: {},
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  firestore: {
    votes: db.collection('Votes'),
  },
  watch: {
    '$route'(to, from) {
      /* console.log(to.path.split('/')[1], '<- to')
      console.log(from.path.split('/')[1], '<- from')
      console.log(from.path.split('/')[0].length, '<- from') */

      const toDepth = to.path.split('/')[1].length
      const fromDepth = from.path.split('/')[1].length
      this.transitionName = toDepth < fromDepth ? 'slide-right-fade' : 'slide-left-fade'
    }
  },
  methods: {
    getCookie: function (cname) {
      let name = cname + '=';
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    },
  },
  mounted() {

    this.$store.commit('setCurrentClientIp');

    db.collection('Votes')
        .get()
        .then(querySnapshot => {
          querySnapshot.docs.map(doc => {
            if (doc.data().currentVote && doc.data().currentVote.hasOwnProperty('ip')) {
              if (doc.data().currentVote['ip'] === this.$store.getters.getCurrentClientIp || this.getCookie('vote') === 'done') {
                // console.log('IP hat bereits mitgemacht:', doc.data().currentVote['ip'] === this.$store.getters.getCurrentClientIp);
                // console.log('Cookie vorhanden:', this.getCookie('vote') === 'done');
                this.$router.push('/done')
              }
            }
          })
        });
  }

};
</script>

<style>


.slide-right-fade-enter-active,
.slide-left-fade-enter-active {
  transition: transform .25s ease-out;
}

.slide-right-fade-leave-active,
.slide-left-fade-leave-active {
  transition: opacity .75s ease, transform .75s ease-in-out;
}

.slide-right-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-left-fade-leave-to {
  transform: translateX(-35%);
  opacity: 0;
}

.content {
  position: relative;
  margin: 0 auto;
}


</style>
