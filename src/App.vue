<template>
  <div id="app">
    <TopNavigation />
    <!-- Update page after clicking on nav -->
    <router-view :key="$route.params" />
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
</style>
