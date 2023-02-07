<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import Thumbnail from '../components/Detailpage/Thumbnail.vue'

const route = useRoute()
const movie = ref([])

async function getMoviesData() {
   try {
      const res = await axios.get(
         'https://api.themoviedb.org/3/movie/' +
            route.params.key +
            '?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US'
      )
      movie.value = res.data
   } catch (error) {}
}
onMounted(() => {
   getMoviesData()
})

const genreMovie = computed(() => {
   return movie.value.genres && movie.value.genres.slice(0, 4)
   // return movie.value?.genres?.slice(0, 4)
})
</script>
<template>
   <div>
      <Thumbnail class="pt-20 lg:pt-0" :thumbnail="movie.backdrop_path" />
      <div class="container">
         <div
            class="grid grid-cols-1 lg:grid-cols-3 mt-4 md:mt-12 gap-8 md:w-[70%] mx-auto"
         >
            <div class="hidden lg:block">
               <img
                  :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
                  alt=""
                  class="rounded-xl"
               />
            </div>
            <div class="lg:col-span-2">
               <span
                  class="py-1 px-3 bg-red-500 text-white font-semibold text-[12px] md:text-sm rounded-3xl right-2"
                  >{{ movie.vote_average }}</span
               >
               <h2
                  class="text-white text-3xl md:text-5xl font-semibold mt-2 mb-1"
               >
                  {{ movie.title }}
               </h2>

               <div class="flex flex-col md:flex-row mt-2 gap-1">
                  <p class="text-sm text-slate-500">
                     {{ movie.runtime }} Minutes.
                  </p>
                  <p class="text-sm text-slate-500">
                     {{
                        new Date(movie.release_date).toLocaleString('en-us', {
                           month: 'long',
                           day: 'numeric',
                           year: 'numeric',
                        })
                     }}
                  </p>
                  <ul class="flex ml-0 md:ml-2">
                     <li
                        class="genre text-sm text-slate-500"
                        v-for="movie in genreMovie"
                        :key="movie.id"
                     >
                        {{ movie.name }}
                     </li>
                  </ul>
               </div>

               <p
                  class="md:text-lg leading-relaxed tracking-wide text-slate-300 mt-4 md:mt-8"
               >
                  {{ movie.overview }}
               </p>
            </div>
         </div>
      </div>
   </div>
</template>

<style>
.genre + .genre:before {
   content: ', ';
   color: #64748b;
}
</style>
