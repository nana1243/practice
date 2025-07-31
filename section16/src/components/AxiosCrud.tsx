import React from 'react';
import axios from 'axios';


function AxiosCrud() {
    const onClickGet = async () => {
        try {
            const {data} = await axios.get('http://localhost:3000/posts');
            console.log(data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
    const onClickPost = async () => {
        const postData = {
            "title": "Post #100(axios)",
            "views": 1001
        };
        try {
            const response = await axios.post('http://localhost:3000/posts', postData);
            console.log(response.data);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    const onClickPut = async () => {
        const postData = {
            "title": "Changed Post #2",
            "views": 1
        };
        try {
            const response = await axios.put('http://localhost:3000/posts/1', postData);
            console.log(response.data);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    }
    const onClickPatch = async () => {
        const postData = {
            "views": 1002
        };
        try {
            const response = await axios.patch('http://localhost:3000/posts/1', postData);
            console.log(response.data);
        } catch (error) {
            console.error("Error patching post:", error);
        }
    }
    const onClickDelete = async () => {
        try {
            const response = await axios.delete('http://localhost:3000/posts/102');
            if (response.status === 200) {
                console.log("Post deleted successfully");
            } else {
                console.error("Failed to delete post");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    }


    return (
        <>
            <button onClick={onClickGet}>GET</button>
            <button onClick={onClickPost}>POST</button>
            <button onClick={onClickPut}>PUT</button>
            <button onClick={onClickPatch}>PATCH</button>
            <button onClick={onClickDelete}>DELETE</button>
        </>

    );
}

export default AxiosCrud;