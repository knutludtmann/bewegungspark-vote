<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col h-screen">
    <div class="max-w-7xl mx-auto p-2 text-xl bg-greenbright flex flex-row items-center justify-around w-full relative">
      <img alt="Vue logo" class="w-12 mx-auto block show-1" src="~/../assets/bewegung.png"/>
      <router-link to="/" class="absolute right-4">
        <button class="text-white p-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"/>
          </svg>
        </button>
      </router-link>
    </div>
    <section class="p-8 m-3 bg-white rounded-lg">
      <h2 class="pb-2 text-2xl font-700 font-bold">
        Du hast abgestimmt, vielen Dank für Deine Angaben.</h2>
      <p>Wir werden weiter Stimmen sammeln und den Neubau der Bewegungsanlage vorantreiben.
        Auf Facebook, Twitter, Instagram werden wir
        Aktuelles posten.</p>
      <nav class="border-t border-b md:border-none flex uppercase justify-center items-center mt-12 p-4 md:p-0">
        <a href="https://www.facebook.com/Bewegungspark-Nordkirchen-109934927959785"
           class="mx-4"
           target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" size="2x"/>
        </a>
        <a href="https://twitter.com/INordkirchen"
           target="_blank"
           class="ml-6 mx-4">
          <font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
        </a>
        <a href="https://twitter.com/INordkirchen"
           target="_blank"
           class="ml-6 mx-4">
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
        </a>
      </nav>
    </section>


    <div class="text-white text-lg pb-6 text-center">
      <p class="font-bold uppercase"><a target="_blank" href="https://bewegungspark-nordkirchen.de">bewegungspark-nordkirchen.de</a></p>
    </div>
  </div>
</template>


<script>
import {ArrowRightIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'
import {
  TextField
} from '@asigloo/vue-dynamic-forms';
import {computed, reactive} from 'vue';
import {db} from "../db";

export default {
  components: {
    MenuIcon,
    XIcon,
    ArrowRightIcon,
    TextField,
    computed
  },
  data() {
    return {
      _currentVote: {},
    }
  },
  firestore: {
    votes: db.collection('Votes'),
  },
  setup() {
    let formValues = reactive({});
    const form = computed(() => ({
      id: 'Survey',
      fields: {
        postcode: TextField({
              placeholder: 'Bspw. 59394'
            }
        ),
      },
    }));

    function valueChanged(values) {
      Object.assign(formValues, values);
    }

    return {
      formValues,
      form,
      valueChanged
    };
  },
  mounted() {
    if (this.getCookie('vote') === 'done') {
      this.$router.push('/done')
    } else {
      this.setDetails();
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

    getNow: function() {
      const today = new Date();
      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + ' ' + time;
      return dateTime;
    },

    setDetails: function () {
      const currentVote = {
        sport: [],
        behindertengerecht: '',
        skill: '',
        frequency: '',
        postcode: '',
        timestamp:'',
      }

      for (const field in this.$store.state) {
        currentVote.skill = this.$store.state['skill'];
        currentVote.behindertengerecht = this.$store.state['behindertengerecht'];
        currentVote.frequency = this.$store.state['frequency'];
        currentVote.postcode = this.$store.state['postcode'];

        if (field === 'sport') {
          for (let i = 0; i <= this.$store.state['sport'].length; i++) {
            if (typeof this.$store.state['sport'][i] === 'string' && typeof this.$store.state['sport'][i] !== undefined) {
              currentVote.sport.push(this.$store.state['sport'][i]);
            }
          }
        }
      }
      currentVote.timestamp =  this.getNow();
      document.cookie = "vote=done; expires=Mon, 10 Feb 2022 12:00:00 UTC";

      db.collection('Votes').add({
        currentVote,
      });
    },

  }
}
</script>

<style lang="scss">
@import "../styles/custom-styles.scss";
</style>
