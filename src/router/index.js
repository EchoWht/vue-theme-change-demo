import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestSass from '@/components/TestSass'
import TreeGrid from '@/components/TreeGrid'
import TableGrid from '@/components/TableGrid'

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
      component: TestSass
    }
    ,
    {
      path: '/treegrid',
      name: 'TreeGrid',
      component: TreeGrid
    }
    ,
    {
      path: '/tablegrid',
      name: 'TableGrid',
      component: TableGrid
    }
  ]
})
