<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import MovieCard from '../CardMovie.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const movies = ref([])
async function getMovieData() {
   try {
      const res = await axios.get(
         'https://api.themoviedb.org/3/movie/popular?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US&page=1'
      )
      movies.value = res.data.results
   } catch (error) {
      console.error(error)
   }
}
onMounted(() => {
   getMovieData()
})
</script>
<template>
   <div>
      <h2 class="text-2xl md:text-3xl font-semibold text-white mb-6">
         Popular
      </h2>
      <swiper
         :spaceBetween="16"
         :pagination="{
            clickable: true,
         }"
         class="mySwiper"
         :breakpoints="{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
         }"
      >
         <swiper-slide v-for="movie in movies">
            <MovieCard
               :id="movie.id"
               :poster_path="movie.poster_path"
               :title="movie.title"
               :vote_average="movie.vote_average"
            />
         </swiper-slide>
      </swiper>
   </div>
</template>
