<template>
  <div class="max-w-7xl mx-auto text-xl h-screen flex flex-col items-center justify-between">
    <div class="bg-greenbright p-8 py-0">

      <div class="py-2 px-14 mx-auto show-1">
        <img alt="Vue Logo" class="p-12 pt-8 pb-2 block w-full" src="~/../assets/bewegung.png"/>
      </div>

      <h2 class="text-xl font-bold text-white text-center uppercase font-700 leading-none show-2">Initiative<br>Bewegungspark<br>
        <span class="font-light">Nordkirchen</span></h2>

    </div>
    <section class="m-3 mt-12 mb-12 p-6 flex flex-col bg-white rounded-lg hyphens-auto">

      <div>
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


      </div>


    </section>

    <div class="text-white text-lg pb-6 text-center">
      <p class="font-bold uppercase">Mehr Bewegung in Nordkirchen</p>
      <a href="https://www.bewegungspark-nordkirchen.de"
         title="Zur Homepage der Initiative Bewegungspark Nordkirchen">www.bewegungspark-nordkirchen.de</a>
    </div>
  </div>
</template>

<script>
import {MenuIcon, XIcon, ArrowRightIcon} from '@heroicons/vue/outline'

export default {
  components: {
    MenuIcon,
    XIcon,
    ArrowRightIcon
  },
  methods: {},
  mounted() {
    window.scrollTo(0, 0);
  }
}
</script>
