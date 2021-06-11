<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-7xl mx-auto p-8 text-xl bg-greenbright h-screen flex flex-col">

    <p class="text-center">Bewegungspark-nordkirchen.de</p>
  </div>
</template>

<script>
import {MenuIcon, XIcon, ArrowRightIcon} from '@heroicons/vue/outline'

export default {
  components: {
    MenuIcon,
    XIcon,
    ArrowRightIcon
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
