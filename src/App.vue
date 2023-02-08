<script setup>
import { ref } from 'vue'
</script>
<template>
   <div class="overflow-hidden pb-20">
      <router-view v-slot="{ Component }">
         <transition name="slide" mode="out-in">
            <component :is="Component"></component>
         </transition>
      </router-view>
   </div>
</template>

<style>
.slide-enter-from {
   opacity: 0;
   transform: translateX(100px);
}
.slide-enter-active {
   transition: all 0.3s ease-out;
}
.slide-leave-to {
   opacity: 0;
   transform: translateX(-100px);
}
.slide-leave-active {
   transition: all 0.3s ease-in;
}
</style>
