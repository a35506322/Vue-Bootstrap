import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bootstrap1',
    name: 'Bootstrap1',
    component: () => import('../views/Bootstrap1.vue')
  },
  {
    path: '/bootstrap2',
    name: 'Bootstrap2',
    component: () => import('../views/Bootstrap2.vue')
  },
  {
    path: '/listgroup',
    name: 'ListGroup',
    component: () => import('../views/ListGroup.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/position',
    name: 'Position',
    component: () => import('../views/Position.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../views/Modal.vue')
  },
  {
    path: '/navbar',
    name: 'Navbar',
    component: () => import('../views/Navbar.vue')
  },
  {
    path: '/navbar2',
    name: 'Navbar2',
    component: () => import('../views/Navbar2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router
