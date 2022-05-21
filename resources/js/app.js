require('./bootstrap');

import { createApp } from 'vue';
import router from './router';
// import App from './layouts/App.vue';

import LaravelVuePagination from 'laravel-vue-pagination';
import VueSweetalert2 from "vue-sweetalert2";

const app = createApp({});
app.use(router);
app.use(VueSweetalert2)
app.component('Pagination', LaravelVuePagination)
app.mount('#app');
