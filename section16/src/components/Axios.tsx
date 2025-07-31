import {useEffect, useState} from 'react';
import axios from "axios";
import {axiosInstance} from "../api/axios";

interface Post {
    id: number;
    title : string;
    views : number;
}

function Axios() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const {data} = await axiosInstance('/posts', {
                    signal: abortController.signal,
                });
                setPosts(data as Post[]);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts()
        // setIsLoading(true);
        // fetch('http://localhost:3000/posts2', {
        //     signal: abortController.signal,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then(result => {
        //         console.log('result',result)
        //         if (!result.ok) {
        //             throw new Error("Network response was not ok");
        //         }
        //         return result.json()
        //     })
        //     .then(data=> {
        //         setPosts(data as Post[])
        //     })
        //     .catch(error => {
        //         console.error("Error fetching posts:", error);
        //     })
        //     .finally(() => setIsLoading(false))
        // return () => {
        //     abortController.abort();
        //     setIsLoading(false);
        // }
    },[])

    return (
        <>
            <h1>Fetch</h1>
            {isLoading && <p>Loading...</p>}
            {posts.length !==0 && posts.map(post => (
                <>
                    <h2 key={post.id}>{post.title}</h2>
                    <p>Views: {post.views}</p>
                </>
            ))}
        </>
    );
}

export default Axios;