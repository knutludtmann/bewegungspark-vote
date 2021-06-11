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
      <ul>
        <li>{{getDetails()}}</li>
      </ul>
      <p>Wir werden weiter Stimmen sammeln und den Neubau der Bewegungsanlage vorantreiben. Auf Facebook werden wir
        Aktuelles posten.</p>
    </section>
    <div class="text-white pb-6 text-center  mt-auto"><p class="font-bold">Verein für mehr Bewegung</p>
      Bewegungspark-nordkrichen.de
    </div>
  </div>
</template>


<script>
import {ArrowRightIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'
import {
  RadioField,
  TextField
} from '@asigloo/vue-dynamic-forms';
import {computed, reactive} from 'vue';


export default {
  components: {
    MenuIcon,
    XIcon,
    ArrowRightIcon,
    TextField,
    computed
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
    speichernUndWeiter: function (values) {
      let vm = this;
      this.$store.commit('clearFrequency');
      Object.keys(values).filter(function (value) {
        if (values[value]) {
          vm.$store.commit('setFrequency', values[value]);
        }
      });
      this.$router.push('/schritt-00005')
    },
    isDisabled: function (values) {
      let a = [];
      Object.keys(values).filter(function (value) {
        if (values[value]) {
          a.push(value);
        }
      })
      return a.length
    },
    getDetails: function () {
      document.cookie = "vote=done; expires=Mon, 10 Feb 2022 12:00:00 UTC";
      return `Deine Sportart: ${this.$store.state.sport} `;
    }
  },
  mounted() {
    if (this.getCookie('vote') === 'done') {
      this.$router.push('/done')
    }
  },
}
</script>
