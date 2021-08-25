import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CurrentCharacter from '../views/CurrentCharacter.vue'
import Searcher from '../views/Searcher.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/CurrentCharacter/:name',
    component: CurrentCharacter,
    name: 'CurrentCharacter',
    props: true
},
{
  path: '/Search',
  component: Searcher,
  name: 'Searcher',  
}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
