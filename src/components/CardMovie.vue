<script setup>
defineProps({
   id: Number,
   poster_path: String,
   vote_average: String,
   title: String,
})

// methods: {
//    genresMovies(idGenre) {
//       let genresArray = []
//       for (let i = 0; i < idGenre.length; i++) {
//          for (let j = 0; j < this.genres.length; j++) {
//             if (idGenre[i] === this.genres[j].id) {
//                genresArray.push(this.genres[j].name + ', ')
//             }
//          }
//       }
//       return genresArray
//    },
// },
</script>
<template>
   <router-link
      :to="'/movie/' + id"
      class="flex overflow-hidden group rounded-xl"
   >
      <div class="relative">
         <img
            :src="'https://image.tmdb.org/t/p/w500/' + poster_path"
            alt=""
            class="scale-105 group-hover:scale-100 transition ease-out duration-300"
         />
         <div class="bg-gradient-to-t from-black absolute inset-0"></div>
         <div class="absolute flex justify-between flex-col inset-0 p-4">
            <div class="flex justify-end">
               <span
                  class="py-1 px-3 bg-red-500 text-white font-semibold text-[12px] md:text-sm rounded-3xl right-2"
                  >{{ vote_average }}</span
               >
            </div>
            <h1
               class="text-white font-semibold text-sm md:text-lg transition ease-out duration-400 text-start"
            >
               {{ title }}
            </h1>
         </div>
      </div>
   </router-link>
</template>
