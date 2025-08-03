import { createRouter, createWebHistory } from 'vue-router'
import Title from '@/pages/Title.vue'
import Game  from '@/pages/Game.vue'
import Save  from '@/pages/Save.vue'

const routes = [
  { path: '/',     name: 'Title', component: Title },
  { path: '/game', name: 'Game',  component: Game },
  { path: '/save', name: 'Save',  component: Save },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
