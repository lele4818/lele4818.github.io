import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
		{
			path:'/article/:slug',
			name:'article',
			component: Article
		},
		{
			path:'/',
			redirect:{name:'Home'}
		}
  ]
})
