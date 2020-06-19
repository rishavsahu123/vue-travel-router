<template>
  <div class="detail">
    <BackButton />
    <section>
      <div class="detail-page">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experience">
      <h2>Top experience in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div
          class="card"
          v-for="experience in destination.experiences"
          :key="experience.slug"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience',
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card__text">{{ experience.name }}</span>
          </router-link>
        </div>
      </div>
      <router-view :key="$route.path" />
    </section>
  </div>
</template>
<script>
/* eslint-disable */
import store from "@/store";
import BackButton from "@/components/BackButton.vue";

export default {
  components: {
    BackButton,
  },
  data() {
    return {};
  },
  props: {
    slug: {
      required: true,
      type: String,
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
.detail {
  padding: 2rem 0;
}
.experience {
  padding: 2rem 0;
}
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
.cards {
  display: flex;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
