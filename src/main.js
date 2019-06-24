// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import '@/styles/index.scss' // global css
import vSelect from 'vue-select'
import App from './App';
import router from './router';
import store from './store'
import VueApexCharts from 'vue-apexcharts'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faThermometerHalf,
  faShieldAlt, faSitemap, faCubes, faCircleNotch, faChartLine, faTasks,
  faExclamationTriangle, faBug} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('apexchart', VueApexCharts)

Vue.use(BootstrapVue)
Vue.use(ElementUI, { locale })

library.add(faUserSecret)
library.add(faThermometerHalf)
library.add(faShieldAlt)
library.add(faSitemap)
library.add(faCubes)
library.add(faCircleNotch)
library.add(faChartLine)
library.add(faTasks)
library.add(faExclamationTriangle)
library.add(faBug)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-select', vSelect)

require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
// require("../node_modules/bootstrap-table/dist/bootstrap-table.css");
require("../node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css");
require("../node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css");
require("../node_modules/bootstrap-select/dist/css/bootstrap-select.min.css");
require("../node_modules/bootstrap-daterangepicker/daterangepicker.css");
require("../node_modules/npm-font-open-sans/open-sans.css");
require("../node_modules/font-awesome/css/font-awesome.min.css");
// require("../node_modules/radar-chart/dist/radar-chart.min.css");
// require("../node_modules/nvd3/build/nv.d3.min.css");
require("../src/assets/style.css");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
