import axios from "axios";
import { ref } from "vue";

export default function usePosts(){
    const posts = ref({});  // define posts object variable as ref

    // get posts methods
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


    return {
        posts,
        getPosts
    }
}
