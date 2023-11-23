<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const searchHandle = ref([])
const query = ref('')

async function searchMovie(query) {
   try {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
         headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzVhZTk0MWI5OGZmNDM2ODQ3MGRmYmUyOGFhMDc1OCIsInN1YiI6IjYyODBjNDdjZmQxNDBiNTY5YTY3ZmY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cWE91HGcAhCmXlrcp4CAXdO26dXdPA43hzEpS18ZgRU',
            accept: 'application/json',
         },
         params: {
            query: query,
            language: 'en-US',
            page: '1',
         },
      })
      searchHandle.value = res.data.results
   } catch (error) {
      console.log(error)
   }
}
onMounted(() => {
   searchMovie()
})
</script>
<template>
   <div class="w-full">
      <form class="relative ml-auto" @submit.prevent="searchMovie">
         <input
            class="w-full pl-4 pr-10 py-3 text-white bg-slate-700 outline-none rounded-full placeholder:text-sm placeholder:text-slate-400"
            type="text"
            v-model="query"
            @keyup="searchMovie(query)"
            placeholder="Search Movie or TV show "
         />
         <button class="absolute top-[10px] right-4 text-slate-400" type="submit">
            <i class="ai-search text-xl"></i>
         </button>
      </form>
      <div class="absolute overflow-y-auto h-[482px] mt-4 rounded-lg z-50">
         <div class="overflow-hidden">
            <router-link :to="'/movie/' + list.id" v-for="list in searchHandle" class="flex items-center gap-4 p-4 bg-slate-800 ">
               <div class="w-20 h-20 md:w-16 md:h-16 overflow-hidden rounded-md" width="40px" height="40px" >
                  <img class="w-full object-cover" :src="'https://image.tmdb.org/t/p/original/' + list.poster_path" :alt="'thumbnail' + list.title" >
               </div>
               <h2 class="text-white text-sm line-clamp-2 w-full">{{ list.title }}</h2>
            </router-link>
         </div>
      </div>
   </div>
</template>
