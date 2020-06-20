import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import dbms from './components/dbms.vue';
import dsa from './components/dsa.vue';
import coa from './components/coa.vue';
import home from './components/home.vue';
import os from './components/os.vue';
import sorting from './components/sorting.vue';

import VueRouter from 'vue-router';
import cooltext from './assets/text.scss';
Vue.use(VueRouter);
Vue.use(cooltext);



Vue.config.productionTip = false



const router = new VueRouter ({
  mode: 'history',

  routes: [
  { path: '/dsa',name:'dsa', component: dsa ,

  children: [
    {
      path: 'sortingalgorithm',
      name: 'sortingalgo',
      component: sorting,
      
    },
   
    ],

},
  { path: '/os',name:'os', component: os },
  { path: '/dbms',name:'dbms', component: dbms },
  { path: '/coa',name:'coa', component: coa },
  { path: '/',name:'home', component: home }

]
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
