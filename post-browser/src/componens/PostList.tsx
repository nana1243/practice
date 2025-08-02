import React, {useEffect, useState} from 'react';
import PostCard from "./PostCard";
import axios from "../api/axios";
import LoadingState from "./LoadingState";
import ErrorState from "./ErrorState";

function PostList() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=> {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const {data} = await axios.get('/posts');
                setPosts(data);
            }catch (e) {
                setError(e instanceof Error ? e.message : 'An unexpected error occurred');
                console.error('Error fetching posts:', e);
            }finally {
                setLoading(false);
            }
        }
        fetchPosts();
    },[])

    return (
        <div className="mb-8">
            {/* 데이터가 없을 때 */}
            {/* <NoData /> */}
            {/* 로딩 중일 때 */}
            {
                loading ? (
                    <LoadingState/>
                ) :
                error ? (
                    <ErrorState/>
                ): (
                    posts.map(post=>{
                        return (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <PostCard
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    views={post.views}
                                />
                            </div>
                        )
                    })

                )


            }
        </div>

    );
}

export default PostList;