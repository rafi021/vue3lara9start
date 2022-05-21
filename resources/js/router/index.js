import { createRouter, createWebHistory } from "vue-router";

/*layouts */
import AuthenticatedLayout from "../layouts/Authenticated";
import GuestLayout from "../layouts/Guest";

/*post routes */
import PostsIndex from '../components/Posts/Index.vue'
import PostsCreate from '../components/Posts/Create.vue'
import PostsEdit from '../components/Posts/Edit'

/*Auth routes */
import Login from '../components/Auth/Login.vue'

const routes = [
    {
        component: GuestLayout,
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login
            },
        ]
    },
    {
        component: AuthenticatedLayout,
        children: [
            {
                path: '/posts',
                name: 'posts.index',
                component: PostsIndex,
                meta: { title: 'Posts' }
            },
            {
                path: '/posts/create',
                name: 'posts.create',
                component: PostsCreate,
                meta: { title: 'Add new post' }
            },
            {
                path: '/posts/edit/:id',
                name: 'posts.edit',
                component: PostsEdit,
                meta: { title: 'Edit post' }
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
