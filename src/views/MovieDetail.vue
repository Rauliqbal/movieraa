<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
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

      console.log(res.data)
   } catch (error) {}
}
onMounted(() => {
   getMoviesData()
})
</script>
<template>
   <div>
      <Thumbnail class="pt-20" :thumbnail="movie.backdrop_path" />
   </div>
</template>
