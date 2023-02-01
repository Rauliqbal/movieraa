import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import Home from '../src/views/Home.vue'

const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         path: '/',
         name: 'Home',
         component: Home,
      },
      {
         path: '/movie/:key',
         name: 'MovieDetail',
         component: () => import('../src/views/MovieDetail.vue'),
      },
   ],
})

createApp(App).use(router).mount('#app')
