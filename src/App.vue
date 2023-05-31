<script setup>
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Navbar from "./components/Navbar.vue"
</script>

<template>
  <div class="custom-font">
    <Navbar />
    <Header />
    <Main />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap");

.custom-font {
  font-family: Roboto;
}

</style>
