<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper'

const modules = [FreeMode]
const casts = ref([])
const route = useRoute()

async function getCast() {
   try {
      const res = await axios.get(
         'https://api.themoviedb.org/3/movie/' +
            route.params.key +
            '/credits?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US'
      )
      casts.value = res.data
   } catch (error) {
      console.error(error)
   }
}

onMounted(() => {
   getCast()
})

const castMovie = computed(() => {
   return casts.value.cast && casts.value.cast.slice(0, 18)
})
</script>
<template>
   <div>
      <h3 class="text-2xl md:text-3xl text-white font-semibold mb-4">Casts</h3>
      <swiper
         :slidesPerView="5"
         :spaceBetween="16"
         :freeMode="true"
         :pagination="{
            clickable: true,
         }"
         :modules="modules"
         :breakpoints="{
            320: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
         }"
         class="mySwiper"
      >
         <swiper-slide v-for="cast in castMovie" :key="cast.id">
            <figure>
               <img
                  class="w-full rounded-md"
                  :src="
                     'https://image.tmdb.org/t/p/original' + cast.profile_path
                  "
                  alt=""
               />
               <h4 class="text-center text-white font-medium text-[12px]">
                  {{ cast.name }}
               </h4>
               <h5 class="text-center text-slate-400 text-[12px]">
                  {{ cast.character }}
               </h5>
            </figure>
         </swiper-slide>
      </swiper>
   </div>
</template>
