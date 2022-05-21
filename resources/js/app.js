require('./bootstrap');

import { createApp } from 'vue';
import PostIndex from './components/Posts/Index.vue'
import LaravelVuePagination from 'laravel-vue-pagination';

const app = createApp({});
app.component('post-index', PostIndex);
app.component('Pagination', LaravelVuePagination)
app.mount('#app');
