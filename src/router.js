import Vue from 'vue'
import Router from 'vue-router'
import Task from './views/Task.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/edit-task/:taskId',
      name: 'edit-task',
      component: Task
    }
  ]
})
