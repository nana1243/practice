import React, {use} from 'react';

interface Post {
    id: number;
    title: string;
    view: number;
}

interface PostsProps {
    promise: Promise<Post[]>;
}


function Posts(props:PostsProps) {
    const {promise} = props;
    const posts = use(promise);

    return (
        <>
            <h3>Posts</h3>
            <pre>{JSON.stringify(posts)}</pre>
        </>
    );
}

export default Posts;