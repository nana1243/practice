import React from 'react';

function FetchCrud() {
    const onClickGet = async () => {
        const response = await fetch('http://localhost:3000/posts');
        const data = await response.json();
        console.log(data);
    };
    const onClickPost = async () => {
        const postData = {
            "title": "Post #100",
            "views": 1001
        }
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        console.log(data);
    }
    const onClickPut = async () => {
        const postData = {
            "title": "Changed Post #2",
            "views": 2
        }
        const response = await fetch('http://localhost:3000/posts/100', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        console.log(data);
    }
    const onClickDelete = async () => {
        const response = await fetch('http://localhost:3000/posts/100', {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log("Post deleted successfully");
        } else {
            console.error("Failed to delete post");
        }
    }
    const onClickPatch = async () => {
        const postData = {
            "views": 1002
        }
        const response = await fetch('http://localhost:3000/posts/100', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        console.log(data);
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

export default FetchCrud;