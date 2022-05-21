require('./bootstrap');

import { createApp } from 'vue';
import router from './router';
import App from './layouts/App.vue';

import LaravelVuePagination from 'laravel-vue-pagination';

const app = createApp(App);
app.use(router);
app.component('Pagination', LaravelVuePagination)
app.mount('#app');
