import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestSass from '@/components/TestSass'
import TableGrid from '@/components/TableGrid'
import TestPostcss from '@/components/TestPostcss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test/sass',
      name: 'TestSass',
      component: TestSass,
      alias:'/TestSass'
    }
    ,
    {
      path: '/tablegrid',
      name: 'TableGrid',
      component: TableGrid
    }
    ,
    {
      path: '/test/postcss',
      name:'TestPostcss',
      component: TestPostcss
    }
  ]
})
