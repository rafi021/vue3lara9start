require('./bootstrap');

import { createApp } from 'vue';
import PostIndex from './components/Posts/Index.vue'

const app = createApp({});
app.component('post-index', PostIndex);
app.mount('#app');
