require('./bootstrap');

import { createApp, onMounted } from 'vue';
import router from './router';
// import App from './layouts/App.vue';

import LaravelVuePagination from 'laravel-vue-pagination';
import VueSweetalert2 from "vue-sweetalert2";
import useAuth from './composables/auth';

const app = createApp({
    setup(){
        const { getUser } = useAuth()
        onMounted(getUser)
    }
});
app.use(router);
app.use(VueSweetalert2)
app.component('Pagination', LaravelVuePagination)
app.mount('#app');
