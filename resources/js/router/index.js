import { createRouter, createWebHistory } from "vue-router";
import PostIndex from '../components/Posts/Index.vue'
import PostCreate from '../components/Posts/Create.vue'
import PostsEdit from '../components/Posts/Edit'

const routes = [
    {
        path: '/',
        name: 'posts.index',
        component:  PostIndex,
        meta: {title: 'Posts'}
    },
    {
        path: '/posts/create',
        name: 'posts.create',
        component:  PostCreate,
        meta: {title: 'Add new post'}
    },
    {
        path: '/posts/edit/:id',
        name: 'posts.edit',
        component:  PostsEdit,
        meta: {title: 'Edit post'}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
