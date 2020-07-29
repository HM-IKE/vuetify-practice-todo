import Vue from 'vue'
import Router from 'vue-router'
import Todo from './components/Todo'
import testRouter from './components/testrouter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Todo
    },
    {
      path: '/memo',
      name: 'memo',
      component: testRouter,
    }
  ]
})