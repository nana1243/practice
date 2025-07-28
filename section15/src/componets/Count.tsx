import React, {useEffect} from 'react';
import CountGroup from "./CountGroup";
import {useCountStore} from "../store/countStore";

function Count(props) {

    useEffect(()=>{
        const unsubscribe = useCountStore.subscribe((state)=> state.count,
            (newCount) => console.log("Count changed!!!! :", newCount)
        );
        return () => {
            unsubscribe();
        };
    },[])


    return (
        <>
            <h1>Count</h1>
            <CountGroup/>
        </>
    );
}

export default Count;