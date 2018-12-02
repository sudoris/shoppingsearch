import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from './components/ProductsList.vue'

Vue.use(Router)

export default new Router({
  routes: [    
    {
      path: '/:keyword?',
      name: 'productslist',
      props: true,
      component: ProductsList    
    }  
  ]
})
