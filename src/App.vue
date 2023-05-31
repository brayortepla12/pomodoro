<script setup>
import Navbar from "./components/Navbar.vue"
import Main from "./components/Main.vue"
</script>

<template>
  <div class="custom-font">
    <Navbar />
    <Main />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap");

.custom-font {
  font-family: Roboto;
}

</style>
