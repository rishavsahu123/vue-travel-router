<template>
  <button @click="handleBack" class="back-button">Go Back</button>
</template>
<script>
export default {
  methods: {
    handleBack() {
      //   this.$router.push({
      //     name: "home",
      //   });
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.back-button {
  display: flex;
  margin-bottom: 1rem;
  background: #2a52c9;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: white;
  cursor: pointer;
}
</style>
