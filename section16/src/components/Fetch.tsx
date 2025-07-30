import React, {useEffect, useState} from 'react';

interface Post {
    id: number;
    title : string;
    views : number;
}

function Fetch() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:3000/posts')
            .then(result => result.json())
            .then(data=>setPosts(data as Post[]))
            .finally(() => setIsLoading(false))

    },[])

    return (
        <>
            <h1>Fetch</h1>
            {isLoading && <p>Loading...</p>}
            {posts.map(post => (
                <>
                    <h2 key={post.id}>{post.title}</h2>
                    <p>Views: {post.views}</p>
                </>
            ))}
        </>
    );
}

export default Fetch;