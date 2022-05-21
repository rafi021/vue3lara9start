import { createRouter, createWebHistory } from "vue-router";
import PostIndex from '../components/Posts/Index.vue'
import PostCreate from '../components/Posts/Create.vue'

const routes = [
    { path: '/', component:  PostIndex, name: 'posts.index'},
    { path: '/posts/create', component:  PostCreate, name: 'posts.create'}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
