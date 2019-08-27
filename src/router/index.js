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
      path: '/test/keep-alive',
      name:'test-keep-alive',
      component:TestKeepAlive
    }
  ]
})
