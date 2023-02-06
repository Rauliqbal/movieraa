<script setup>
import NowPlaying from '../components/Homepage/NowPlaying.vue'
import Popular from '../components/Homepage/Popular.vue'
import Carousel from '../components/Homepage/Carousel.vue'
</script>
<template>
   <main class="container">
      <Carousel class="mt-20 md:mt-0" />
      <NowPlaying class="mt-10" />
      <Popular class="mt-10" />
   </main>
</template>
