// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../node_modules/bootstrap-table/dist/bootstrap-table.min.css");
require("../node_modules/bootstrap-toggle/css/bootstrap-toggle.min.css");
require("../node_modules/bootstrap-tagsinput/dist/bootstrap-tagsinput.css");
require("../node_modules/bootstrap-select/dist/css/bootstrap-select.min.css");
require("../node_modules/bootstrap-daterangepicker/daterangepicker.css");
require("../node_modules/npm-font-open-sans/open-sans.css");
require("../node_modules/font-awesome/css/font-awesome.min.css");
require("../node_modules/radar-chart/dist/radar-chart.min.css");
require("../node_modules/nvd3/build/nv.d3.min.css");
require("../src/assets/style.css");

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
