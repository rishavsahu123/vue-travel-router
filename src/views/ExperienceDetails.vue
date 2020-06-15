<template>
  <div>
    <h3>Experience</h3>
    <h2>{{ experience.name }}</h2>
    <div class="detail-page">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </div>
</template>
<script>
import store from "@/store";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find((item) => item.slug === this.slug);
    },
    experience() {
      return this.destination.experiences.find(
        (item) => item.slug === this.experienceSlug
      );
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
</style>
