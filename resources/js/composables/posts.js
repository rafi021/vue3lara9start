import axios from "axios";
import { ref } from "vue";

export default function usePosts(){
    const posts = ref({});  // define posts object variable as ref

    // get posts methods
    const getPosts = async (page = 1) => {
        axios.get('/api/posts?page=' + page)
        .then(response => {
            posts.value = response.data;
        })
    }


    return {
        posts,
        getPosts
    }
}
