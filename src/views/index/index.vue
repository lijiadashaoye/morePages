<template>
  <div class="about">
    <h1>This is an index page</h1>
    <a href="./home.html">HOME</a>
    <br>
    <a href="./about.html">ABOUT</a>

    <Com />
  </div>
</template>

<script>
import Com from "@/components/com.vue";
export default {
  components: {
    Com,
  },
  created() {
    this.$api.fn().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
