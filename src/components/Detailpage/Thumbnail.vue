<script setup>
import axios from 'axios'
import { toggleClass } from 'dom7'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
   thumbnail: String,
})

const route = useRoute()
const trailers = ref([])

async function getTrailer() {
   try {
      const res = await axios.get(
         'https://api.themoviedb.org/3/movie/' +
            route.params.key +
            '/videos?api_key=6c5ae941b98ff4368470dfbe28aa0758&language=en-US'
      )

      trailers.value = res.data
   } catch (error) {
      console.error(error)
   }
}

onMounted(() => {
   getTrailer()
})

const trailer = computed(() => {
   return trailers.value.results && trailers.value.results.slice(0, 1)
})

const isOpen = ref(false)
</script>
<template>
   <div class="container">
      <div class="overflow-hidden rounded-xl relative">
         <img
            class="w-full object-cover h-[225px] md:h-[500px]"
            :src="'https://image.tmdb.org/t/p/original' + thumbnail"
            alt=""
         />
         <div
            class="bg-black/40 absolute inset-0 flex items-center justify-center"
         >
            <button class="flex items-center gap-2 mt-8" @click="isOpen = true">
               <div
                  class="inline-flex justify-center items-center w-14 h-14 text-white bg-red-600 rounded-full"
               >
                  <i class="ai-triangle-right text-3xl"></i>
               </div>
            </button>

            <teleport to="body">
               <div
                  class="bg-black/80 fixed inset-0 h-screen z-50"
                  v-if="isOpen"
                  @click="isOpen = false"
               >
                  <div
                     class="container flex h-full items-center justify-center"
                     v-for="trailer in trailer"
                     :key="trailer.id"
                  >
                     <iframe
                        width="560"
                        height="315"
                        :src="'https://www.youtube.com/embed/' + trailer.key"
                        :title="trailer.movie"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                     ></iframe>
                  </div>
               </div>
            </teleport>
         </div>
      </div>
   </div>
</template>
