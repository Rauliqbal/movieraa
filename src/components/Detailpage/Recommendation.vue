<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import CardMovie from '../CardMovie.vue'
import { Pagination } from 'swiper'

const modules = [Pagination]
const recommend = ref([])
const route = useRoute()

async function getRecommendData() {
   try {
      const response = await axios.get(
         'https://api.themoviedb.org/3/movie/' +
            route.params.key +
            '/recommendations?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US&page=1'
      )
      recommend.value = response.data.results
   } catch (error) {}
}
onMounted(() => {
   getRecommendData()
})

function reloadPage() {
   window.setTimeout(function () {
      location.reload()
   }, 100)
}
</script>
<template>
   <div>
      <h3 class="text-2xl md:text-3xl font-semibold text-white mb-4">
         Recommended
      </h3>
      <swiper
         :modules="modules"
         :spaceBetween="16"
         :pagination="{
            clickable: true,
         }"
         class="mySwiper pb-8"
         :breakpoints="{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
         }"
      >
         <swiper-slide v-for="movie in recommend" :key="movie.id">
            <CardMovie
               @click="reloadPage()"
               :id="movie.id"
               :poster_path="movie.poster_path"
               :title="movie.title"
               :vote_average="movie.vote_average"
            />
         </swiper-slide>
      </swiper>
   </div>
</template>
