<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

const movies = ref([])
async function getMovieData() {
   try {
      const res = await axios.get(
         'https://api.themoviedb.org/3/movie/upcoming?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US&page=1'
      )
      movies.value = res.data.results
   } catch (error) {
      console.error(error)
   }
}
onMounted(() => {
   getMovieData()
})

modules: [Pagination]
</script>
<template>
   <swiper
      :spaceBetween="30"
      :pagination="{
         clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
   >
      <swiper-slide v-for="movie in movies.slice(0, 4)">
         <div class="overflow-hidden relative group rounded-xl">
            <img
               class="w-full h-[530px] object-cover object-center rounded-xl group-hover:scale-105 duration-700"
               :src="
                  'https://image.tmdb.org/t/p/original' + movie.backdrop_path
               "
               alt=""
            />
            <div class="bg-black/40 absolute inset-0"></div>
            <div
               class="absolute left-0 top-0 p-10 z-10 flex flex-col justify-end h-full"
            >
               <div>
                  <span
                     class="py-1 px-3 bg-red-500 text-white font-semibold text-[12px] md:text-sm rounded-3xl right-2"
                     >{{ movie.vote_average }}</span
                  >
                  <h1
                     class="text-white text-5xl font-bold leading-tight max-w-md mt-2"
                  >
                     {{ movie.title }}
                  </h1>
                  <h4 class="text-lg font-medium text-white mt-4">
                     Release {{ movie.release_date }}
                  </h4>

                  <button class="flex items-center gap-2 mt-8">
                     <div
                        class="inline-flex justify-center items-center w-10 h-10 text-white bg-red-600 rounded-full"
                     >
                        <i class="ai-triangle-right text-3xl"></i>
                     </div>
                     <p class="text-white">Watch the trailer</p>
                  </button>
               </div>
            </div>
         </div>
      </swiper-slide>
   </swiper>
</template>
