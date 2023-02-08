<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper'

export default {
   components: {
      Swiper,
      SwiperSlide,
   },

   data() {
      return {
         movies: [],
         modules: [Autoplay, Pagination],
      }
   },

   methods: {
      async getMovieData() {
         const res = await axios.get(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US&page=1'
         )

         this.movies = res.data.results
      },
   },

   mounted() {
      this.getMovieData()
   },
}

// const movies = ref([])
// async function getMovieData() {
//    try {
//       const res = await axios.get(
//          'https://api.themoviedb.org/3/movie/upcoming?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US&page=1'
//       )
//       movies.value = res.data.results
//    } catch (error) {
//       console.error(error)
//    }
// }
// onMounted(() => {
//    getMovieData()
// })
// :autoplay="{
//          delay: 3500,
//          disableOnInteraction: false,
//       }"

modules: [Pagination]
</script>
<template>
   <swiper
      :spaceBetween="30"
      :pagination="{
         clickable: true,
      }"
      :autoplay="{
         delay: 2500,
         disableOnInteraction: false,
      }"
      :modules="modules"
      class="mySwiper pb-14 md:pb-0"
   >
      <swiper-slide v-for="movie in movies.slice(0, 7)" :key="movie.id">
         <router-link
            :to="'/movie/' + movie.id"
            class="overflow-hidden group rounded-xl"
         >
            <div class="relative overflow-hidden rounded-xl">
               <img
                  class="w-full h-[225px] md:h-[500px] object-cover object-center rounded-xl group-hover:scale-105 duration-700"
                  :src="
                     'https://image.tmdb.org/t/p/original' + movie.backdrop_path
                  "
                  alt=""
               />
               <div class="bg-black/40 absolute inset-0"></div>
            </div>
            <div
               class="absolute inset-x-0 top-0 p-4 md:p-10 z-10 flex flex-col justify-end h-full"
            >
               <div>
                  <span
                     class="py-1 px-3 bg-red-500 text-white font-semibold text-[12px] md:text-sm rounded-3xl right-2"
                     >{{ movie.vote_average }}</span
                  >
                  <h1
                     class="text-white text-2xl md:text-5xl font-bold leading-tight max-w-md mt-2"
                  >
                     {{ movie.title }}
                  </h1>
                  <h4 class="text-sm md:text-lg font-medium text-white mt-4">
                     Release
                     {{
                        new Date(movie.release_date).toLocaleString('en-us', {
                           month: 'long',
                           day: 'numeric',
                           year: 'numeric',
                        })
                     }}
                  </h4>

                  <button
                     class="absolute md:relative bottom-[-22px] md:bottom-0 right-4 md:right-0 md:flex items-center gap-2 mt-8"
                  >
                     <div
                        class="inline-flex justify-center items-center w-12 h-12 text-white bg-red-600 rounded-full"
                     >
                        <i class="ai-triangle-right text-3xl"></i>
                     </div>
                     <p class="text-white hidden md:block">Watch the trailer</p>
                  </button>
               </div>
            </div>
         </router-link>
      </swiper-slide>
   </swiper>
</template>
<style>
.swiper-pagination-bullet {
   background: #e61c1c !important;
   width: 6px !important;
   height: 6px !important;
   border-radius: 4px !important;
}
.swiper-pagination-bullet-active {
   background: #d12323 !important;
   width: 18px !important;
   height: 6px !important;
   border-radius: 4px !important;
}
</style>
