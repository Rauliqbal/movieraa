<script setup>
defineProps({
   thumbnail: String,
})
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
            <button class="flex items-center gap-2 mt-8">
               <div
                  class="inline-flex justify-center items-center w-14 h-14 text-white bg-red-600 rounded-full"
               >
                  <i class="ai-triangle-right text-3xl"></i>
               </div>
            </button>
         </div>
      </div>
   </div>
</template>
