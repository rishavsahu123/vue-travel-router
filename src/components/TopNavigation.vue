<template>
  <nav id="nav">
    <ul class="nav-links">
      <li class="links"><router-link to="/">Home</router-link></li>
      <li class="links" v-for="route in destination" :key="route.slug">
        <router-link
          :to="{ name: 'detailsPage', params: { slug: route.slug } }"
        >
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
#nav {
  position: sticky;
  z-index: 1;
  top: 0;
  background: white;
  border-bottom: 1px solid gray;
}
.nav-links {
  display: flex;
  justify-content: center;
  padding: 10px;
}

.links {
  padding-right: 20px;
  list-style: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
