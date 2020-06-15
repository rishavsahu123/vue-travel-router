<template>
  <div class="home">
    <h1>All Destination</h1>
    <div class="destination">
      <div v-for="destination in destinations" :key="destination.slug">
        <router-link
          :to="{ name: 'detailsPage', params: { slug: destination.slug } }"
        >
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{ name: 'detailsPage', params: { slug: destination.slug } }"
          >
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// next line will ignore all warning in a file.
/* eslint-disable */
// for single line ignore, use below comment
// eslint-disable-next-line
import store from "@/store";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>
<style scoped>
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.destination {
  display: flex;
  justify-content: space-between;
}
</style>
