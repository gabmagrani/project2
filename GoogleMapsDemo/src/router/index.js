import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NewPost from '../views/NewPost.vue'
import Destinations from '../views/Destinations.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newpost',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/destinations',
    name: 'Destinations',
    component: Destinations
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
