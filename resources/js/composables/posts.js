import axios from "axios";
import { ref } from "vue";

export default function usePosts(){
    const posts = ref([]);  // define posts array variable as ref

    // get posts methods
    const getPosts = async() => {
        axios.get('/api/posts')
        .then(response => {
            posts.value = response.data.data;
        })
    }


    return {
        posts,
        getPosts
    }
}
