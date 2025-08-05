import React from 'react';
import {axiosInstance} from "../../../section16/src/api/axios";
import Posts from "./Posts";
import {ErrorBoundary} from "react-error-boundary";
import Error from "./Error";

async function fetchPosts() {
    const {data} = await axiosInstance.get('/posts/103');
    return data;
}


function UseSuspenseComponent(props) {


    return (
        <ErrorBoundary FallbackComponent={Error} >
            <React.Suspense fallback={<div>Loading posts...</div>}>
                <Posts promise={fetchPosts()} />
            </React.Suspense>
        </ErrorBoundary>
    );
}

export default UseSuspenseComponent;