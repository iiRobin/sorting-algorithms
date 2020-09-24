import Vue from 'vue'
import App from './App.vue'

/**
 * Include the core bootstrap file. This file is responsible for loading most
 * of the Javascript dependencies AND Vue itself.
 */

require('./bootstrappers/bootstrap');


/**
 * Load Vue since this application is using Vue as its framework.
 */

require('./bootstrappers/vue-bootstrap');


/**
 * Load all of the shared Vue components.
 */

require('./components/bootstrap');


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
