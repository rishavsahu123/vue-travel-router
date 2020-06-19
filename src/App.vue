<template>
  <div id="app">
    <TopNavigation />
    <!-- Update page after clicking on nav  -->
    <transition name="fade" mode="out-in">
      <router-view :key="$route.params.slug" />
    </transition>
  </div>
</template>
<script>
import TopNavigation from "@/components/TopNavigation.vue";
export default {
  components: { TopNavigation },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
