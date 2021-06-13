<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
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
        Wie gut bist Du im Skaten, Scooter, BMX, Dirt Bike, Fitness?</h2>
      <div class="pb-6">Gib an wie du Dich einschätzt.</div>
      <dynamic-form class="text-xl"
                    :form="form"
                    @change="valueChanged"/>
      <div class="">
        <button
          :disabled="isDisabled(formValues) < 1"
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
      <p class="font-bold uppercase">Verein für mehr Bewegung</p>
      www.bewegungspark-nordkirchen.de
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
    RadioField,
    TextField,
    computed
  },
  setup() {
    let formValues = reactive({});
    const form = computed(() => ({
      id: 'Survey',
      fields: {
        skill: RadioField({
          options:[
            {
              key: 'anfaenger',
              value: 'Anfänger'
            },
            {
              key: 'bisher-nur-interessiert',
              value: 'Bisher nur interessiert',
            },
            {
              key: 'fortgeschritten',
              value: 'Fortgeschritten',
            },
            {
              key: 'sehr-fortgeschritten',
              value: 'Sehr fortgeschritten'
            },
            {
              key: 'professionell',
              value: 'Professionell'
            }
          ]
        }),
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
      // console.log(this.$store.state.skill);
      this.$store.commit('clearSkill');
      // console.log(this.$store.state.skill);
      Object.keys(values).filter(function (value) {
        if (values[value]) {
          vm.$store.commit('setSkill', values[value]);
        }
      });
      this.$router.push('/schritt-003') // -> /user/123
    },
    isDisabled: function (values) {
      let a = [];
      Object.keys(values).filter(function (value) {
       //  console.log(value,values[value])
        if (values[value]) {
          a.push(value);
        }
      })
      return a.length
    }
  },
  mounted() {
    if (this.getCookie('vote') === 'done') {
      this.$router.push('/done')
    }
  },
}
</script>
