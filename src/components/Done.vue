<template>
  <div class="max-w-7xl mx-auto text-xl h-screen flex flex-col items-center justify-between">
    <div class="bg-greenbright p-8 py-0">

      <div class="py-2 px-14 mx-auto show-1">
        <img alt="Vue Logo" class="p-12 pt-8 pb-2 block w-full" src="~/../assets/bewegung.png"/>
      </div>

      <h2 class="text-xl font-bold text-white text-center uppercase font-700 leading-none show-2">Bewegungspark<br>
        <span class="font-light">Nordkirchen</span></h2>

    </div>
    <section class="m-3 mt-0 mb-0 p-6 flex flex-col bg-white rounded-lg">

      <div>
        <h1 class="hyphens-auto italic text-xl font-bold"><span class="font-light">Vielen Dank, Du hast bereits abgestimmt.</span></h1>


        <p class="text-lg">Initiative für mehr Bewegung in Nordkirchen.</p>
      </div>


    </section>

    <div class="text-white text-lg pb-6 text-center">
      <p class="font-bold uppercase">Verein für mehr Bewegung</p>
      Bewegungspark-nordkrichen.de
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
}
</script>
