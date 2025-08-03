import React, {useEffect, useState, useTransition} from 'react';
import axios from "axios";

function UseTransitionComponent(props) {
    const [post,setPosts] = useState([]);
    const [isPending, startTransition] = useTransition();
    useEffect(()=>{
        startTransition(async () => {
            const {data} = await axios.get('http://localhost:3000/posts');
            setPosts(data);
        })

    },[isPending])

    return (
        <>
            <h1>useTransition</h1>
            <ul>
                {post.map((p) => (
                    <li key={p.id}>
                        <p>{p.title}</p>
                    </li>
                ))}
                {isPending && <li>Loading...</li>}
            </ul>
        </>
    )
}

export default UseTransitionComponent;