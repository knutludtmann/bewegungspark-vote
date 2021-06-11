<template>
  <div class="content">
    <router-view v-slot="{ Component }">
      <transition :name="transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      /* console.log(to.path.split('/')[1], '<- to')
      console.log(from.path.split('/')[1], '<- from')
      console.log(from.path.split('/')[0].length, '<- from') */

      const toDepth = to.path.split('/')[1].length
      const fromDepth = from.path.split('/')[1].length
      this.transitionName = toDepth < fromDepth ? 'slide-right-fade' : 'slide-left-fade'
    }
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
