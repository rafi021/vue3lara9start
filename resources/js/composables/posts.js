import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function usePosts(){
    const posts = ref({});  // define posts object variable as ref
    const post = ref({});   // define single post
    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)



    // get posts method
    const getPosts = async (
        page = 1,
        category = '',
        order_column ='created_at',
        order_direction = 'desc'
        ) => {
        axios.get('/api/posts?page=' + page +
        '&category=' + category +
        '&order_column=' + order_column +
        '&order_direction=' + order_direction
        )
        .then(response => {
            posts.value = response.data;
        })
    }

    // store post method
    const storePost = async(post) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}


        let serializedPost = new FormData()
        for (let item in post) {
            if (post.hasOwnProperty(item)) {
                serializedPost.append(item, post[item])
            }
        }

        axios.post('/api/posts', serializedPost)
        .then(response => {
            router.push({
                name: 'posts.index'
            })
        })
        .catch(error => {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors
            }
        })
        .finally(() => isLoading.value = false)
    }

    /*get single post method */
    const getPost = async(id) => {
        axios.get('/api/posts/' + id)
            .then(response => {
                post.value = response.data.data;
            })
    }

    /*update post method */
    const updatePost = async (post) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/posts/' + post.id, post)
            .then(response => {
                router.push({ name: 'posts.index' })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }


    return {
        post,
        posts,
        isLoading,
        validationErrors,
        getPost,
        getPosts,
        storePost,
        updatePost
    }
}
