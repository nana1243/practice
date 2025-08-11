import React from 'react';
import {useParams} from "react-router";

function PostDetail() {
    const {id, detail} = useParams();
    console.log('useParams() : ', useParams());

    return (
        <>
            <h3>Post Detail : {id} and {detail}</h3>
            <p>This is the detail page for post {id} with detail {detail}.</p>
        </>
    );
}

export default PostDetail;