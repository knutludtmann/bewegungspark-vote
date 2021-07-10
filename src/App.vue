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
  mounted() {

    db.collection('Votes')
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => {

            if (doc.data().currentVote && doc.data().currentVote.hasOwnProperty('ip')) {
              console.log('->', doc.data());
            }
            return doc.data()
          })
        });

    function json(url) {
      return fetch(url).then(res => res.json());
    }

    let apiKey = '7ad3d600b4460ad46f4c5ebbc6e21fa1a4553a408fe57b96c8baeb0a';
    json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
      console.log(data.ip);
      // so many more properties
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
