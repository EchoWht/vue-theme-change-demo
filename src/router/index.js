import Vue from 'vue'
import Router from 'vue-router'
import TestSass from '@/components/TestSass'
import TableGrid from '@/components/TableGrid'
import TestPostcss from '@/components/TestPostcss'
import HomePage from "../components/HomePage";
import TestComponent from "../components/TestComponent";
import PageFooter from "../components/PageFooter";
import TestAxios from "../components/TestAxios";
import TestKeepAlive from "../components/TestKeepAlive";
import TestStyleScoped from "../components/TestStyleScoped";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HomePage
    },
    {
      path: '/test/sass',
      name: 'TestSass',
      component: TestSass,
      alias:'/TestSass'
    }
    ,
    {
      path: '/test/tablegrid',
      name: 'TableGrid',
      component: TableGrid
    }
    ,
    {
      path: '/test/postcss',
      name:'TestPostcss',
      component: TestPostcss
    }
    ,
    {
      path: '/test/component',
      name:'TestComponent',
      component: TestComponent
    }
    ,
    {
      path: '/test/page-footer',
      name:'page-footer',
      component: PageFooter
    }
    ,
    {
      path: '/test/axios',
      name:'test-axios',
      component:TestAxios
    }
    ,
    {
      path: '/test/keep-alive',
      name:'test-keep-alive',
      component:TestKeepAlive
    }
    ,
    {
      path: '/test/scoped',
      name:'test-scoped',
      component:TestStyleScoped
    }
    ,
    {
      path: '/test/store',
      name:'test-store',
      component: (resolve) => require(['@/components/TestStore'], resolve)
    }
  ]
})
