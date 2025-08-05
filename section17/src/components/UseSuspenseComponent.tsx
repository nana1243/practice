import React from 'react';
import {axiosInstance} from "../../../section16/src/api/axios";
import Posts from "./Posts";

async function fetchPosts() {
    const {data} = await axiosInstance.get('/posts');
    return data;
}


function UseSuspenseComponent(props) {


    return (
        <React.Suspense fallback={<div>Loading posts...</div>}>
            <Posts promise={fetchPosts()} />
        </React.Suspense>
    );
}

export default UseSuspenseComponent;