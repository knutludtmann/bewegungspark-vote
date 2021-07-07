<template>
  <div class="max-w-7xl mx-auto text-xl h-screen flex flex-col items-center justify-between">
    <div class="bg-greenbright p-8 py-0">
      <div class="py-2 px-6 mx-auto show-1">
        <img alt="Vue Logo" class="p-12 pt-4 pb-2 block w-48" src="~/../assets/bewegung.png"/>
      </div>

      <h2 class="text-xl font-bold text-white text-center uppercase font-700 leading-none show-2">Inititative<br>Bewegungspark<br>
        <span class="font-light">Nordkirchen</span></h2>

    </div>
    <section class="m-3 my-4 p-6 flex flex-col bg-white rounded-lg">

      <div>
        <h1 class="hyphens-auto italic text-xl font-bold">
          Beteiligungskampagne für den Bewegungspark in Nordkirchen.
          <br><br>
          <span class="font-light">Klicke den Button und beantworte die Fragen.</span></h1>

        <router-link to="/schritt-0"
                     class="my-8 border-8 p-4 border-gray-900 font-bold italic flex items-center justify-center show-3 rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="inline mr-2 h-10 w-10" viewBox="0 0 20 20"
               fill="currentColor">
            <path fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"/>
          </svg>
          <div class="uppercase text-2xl leading-none">Mitmachen</div>
        </router-link>

      </div>

    </section>

    <div class="text-white text-lg pb-6 text-center">
      <p class="font-bold uppercase"><a target="_blank" href="https://bewegungspark-nordkirchen.de">bewegungspark-nordkirchen.de</a></p>
    </div>
  </div>
</template>

<script>
import {MenuIcon, XIcon, ArrowRightIcon} from '@heroicons/vue/outline'
import {db} from '../db'

export default {
  components: {
    MenuIcon,
    XIcon,
    ArrowRightIcon
  },
  data() {
    return {
      votes: [],
      timestamp:'',
    }
  },
  firestore: {
    votes: db.collection('Votes'),
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

    getDetails: function () {
      document.cookie = "vote=done; expires=Mon, 10 Feb 2022 12:00:00 UTC";
      return `Deine Sportart: ${votes} `;
    }
  },
  mounted() {




    if (this.getCookie('vote') === 'done') {
      this.$router.push('/done')
    }
  },
}
</script>
