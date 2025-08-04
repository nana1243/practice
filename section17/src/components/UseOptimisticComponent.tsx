import React, {useEffect, useOptimistic, useRef, useState} from 'react';
import {Heart} from "lucide-react";
import {axiosInstance} from "../api/axios";

interface Posts {
    id:number;
    isLike : boolean;
}


function UseOptimisticComponent(props) {
    const controller = useRef(new AbortController());
    const [posts, setPosts] = useState<Posts[]>([]);
    const [optimisticPosts, addOptimisticPost] = useOptimistic<Posts[]>(posts, (state,value)=>{
        return state.map(post => post.id === value.id ? {...post, isLike: value.isLike} : post);

    });

    useEffect(()=>{
        const fetchData = async () => {
            const {data} = await axiosInstance.get('/posts')
            setPosts(data);
        }
        fetchData();
    },[])

    const updateLike = async (id:number, isLike:boolean) =>{
        controller.current?.abort("Operation cancelled, new request initiated");
        controller.current = new AbortController();
        addOptimisticPost(id)
        const {data} = await axiosInstance.patch(`/posts/${id}`, {
            isLike: !isLike
        });
        setPosts(prevPosts =>{
            return prevPosts.map(post=> post.id === id ? {...post, isLike: !isLike} : post)
        })
    }


    return (
        <>
            {posts.map((post)=>(
                <>
                    <Heart
                        key={post.id}
                        fill={post.isLike ? "rgb(255, 0, 0)" : "none"}
                        stroke={post.isLike ? "rgb(255, 0, 0)" : "currentColor"}
                        onClick={()=>updateLike(post.id, post.isLike)}
                    />
                </>

            ))}
        </>
    );
}

export default UseOptimisticComponent;