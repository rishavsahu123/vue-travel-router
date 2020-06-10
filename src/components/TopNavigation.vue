<template>
  <nav id="nav">
    <ul class="nav-links">
      <li class="links"><router-link to="/">Home</router-link></li>
      <li class="links" v-for="route in destination" :key="route.id">
        <router-link :to="{ name: 'detailsPage', params: { id: route.slug } }">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import store from "@/store";

export default {
  data() {
    return {
      destination: store.destinations,
    };
  },
};
</script>

<style>
.nav-links {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.links {
  padding-right: 20px;
  list-style: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
