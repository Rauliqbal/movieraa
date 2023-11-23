<script setup>
import Search from './Search.vue';

</script>
<template>
   <div>
      <div
         class="container w-full flex items-center gap-4 top-4 inset-x-0 absolute lg:invisible visible"
      >
         <Search/>
         <img class="rounded-full w-12" src="../assets/avatar.png" alt="" />
      </div>
      <nav class="fixed lg:relative bottom-2 inset-x-4 z-10">
         <div
            class="container py-4 md:py-8 px-5 bg-slate-700/60 border-2 lg:border-none border-slate-700 backdrop-blur-sm lg:bg-transparent md:flex rounded-xl"
         >
            <div class="w-full lg:flex items-center gap-20">
               <h1 class="text-white font-bold text-2xl hidden lg:block">
                  MOVIE<span class="text-[#d13232]">RAA</span>
               </h1>

               <div class="flex items-center gap-8 justify-evenly">
                  <RouterLink
                     to="/"
                     class="text-white hover:text-red-500 transition-all duration-300"
                  >
                     <span class="hidden lg:block">Home</span>
                     <i class="lg:hidden text-xl ai-home"></i>
                  </RouterLink>
                  <a
                     href="#"
                     class="text-white hover:text-red-500 transition-all duration-300"
                  >
                     <span class="hidden lg:block">Movies</span>

                     <i class="lg:hidden text-xl ai-video"></i
                  ></a>
                  <a
                     href="#"
                     class="text-white hover:text-red-500 transition-all duration-300"
                  >
                     <span class="hidden lg:block">Trending</span>

                     <i class="lg:hidden text-xl ai-fire"></i>
                  </a>
                  <a
                     href="#"
                     class="text-white hover:text-red-500 transition-all duration-300"
                  >
                     <span class="hidden lg:block">TV Show</span>
                     <i class="lg:hidden text-xl ai-airplay-video"></i
                  ></a>
               </div>

               <div class="hidden lg:flex items-center gap-4 ml-auto">
                  <Search/>
                  <img
                     class="rounded-full w-12"
                     src="../assets/avatar.png"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </nav>
   </div>
</template>
