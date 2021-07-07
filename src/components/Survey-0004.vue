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
        Wo wohnst Du? Bitte gib die Postleitzahl Deines Wohnortes an.</h2>
      <div class="pb-6">Bitte angeben.</div>
      <dynamic-form class="text-xl"
                    :form="form"
                    @change="valueChanged"/>
      <div class="flex justify-between">
        <button
            :disabled="disabled.status"
            v-on:click="speichernUndWeiter(formValues)"
            class="border-4 mt-6 p-4 rounded-xl border-gray-900 font-bold italic flex items-center justify-center">
          <span class="text-2xl pl-1">Okay, weiter</span>
        </button>
        <button
            class="border-1 mt-6 p-4 rounded-3xl border-gray-900 font-bold italic flex items-center justify-center">
          <router-link to="/schritt-1">
            zurück
          </router-link>
        </button>
      </div>
    </section>

    <div class="text-white text-lg pb-6 text-center">
      <p class="font-bold uppercase"><a target="_blank" href="https://bewegungspark-nordkirchen.de">bewegungspark-nordkirchen.de</a></p>
    </div>
  </div>
</template>


<script lang="ts">
import {ArrowRightIcon, MenuIcon, XIcon} from '@heroicons/vue/outline'
import {
  TextField,
  FormValidator,
  Validator,
  pattern
} from '@asigloo/vue-dynamic-forms';
import {computed, reactive} from 'vue';


export default {
  components: {
    MenuIcon,
    XIcon,
    ArrowRightIcon,
    TextField,
    computed,
  },
  data() {
    return {
      disabled: true,
    }
  },
  setup() {

    let formValues = reactive({});
    let disabled = reactive({
      status: true
    });

    const plzValidator: FormValidator = Validator({
      validator: pattern(
          '^[0-9]{5}$',
      ),
      text:
          'Bitte gib Deine Postleitzahl an.',
    });

    const form = computed(() => ({
      id: 'Survey',

      fields: {
        postcode: TextField({
              placeholder: 'Bspw. 59394',
              validations: [plzValidator],
            }
        ),
      },
    }));

    function valueChanged(values) {
      disabled.status = values.postcode.length !== 5;
    }

    return {
      formValues,
      form,
      disabled,
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
      this.$store.commit('clearPostcode');
      Object.keys(values).filter(function (value) {
        if (values[value]) {
          vm.$store.commit('setPostcode', values[value]);
        }
      });
      this.$router.push('/schritt-00005')
    }
  },
  mounted() {
    if (this.getCookie('vote') === 'done') {
      this.$router.push('/done')
    }
  },
}
</script>

<style lang="scss">
@import "../styles/custom-styles.scss";
</style>
