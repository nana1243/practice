import React from 'react';
import PostHeader from "./PostHeader";
import PostList from "./PostList";
import Pagination from "./Pagination";

function PostPage() {
    return (
        <>
            <PostHeader/>
            <PostList/>
            <Pagination/>
        </>
    );
}

export default PostPage;