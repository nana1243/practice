import React from 'react';
import {useParams} from "react-router";

function Post() {
    const {id} = useParams();

    return (
        <>
            <h3>Hello Posts! : {id}</h3>
            <p>Here you can find a list of posts.</p>
        </>
    );
}

export default Post;