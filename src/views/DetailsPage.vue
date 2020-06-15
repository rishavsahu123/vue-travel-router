<template>
  <div class="detail-page">
    <img
      :src="require(`@/assets/${destination.image}`)"
      :alt="destination.name"
    />
    <p>{{ destination.description }}</p>
  </div>
</template>
<script>
/* eslint-disable */
import store from "@/store";
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      required: true
    },
  },
  computed: {
    destination() {
      return store.destinations.find((item) => item.slug === this.slug);
    },
  },
};
</script>
<style scoped>
img {
  max-width: 600px;
  max-height: 400px;
}
.detail-page {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>
