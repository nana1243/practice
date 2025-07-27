import React from 'react';
import {useCountStore} from "../store/countStore";
import CountButton from "./CountButton";

function CountDisplay() {
    const count = useCountStore(state => state.count);

    return (
        <>
            <h3>CountDisplay : {count}</h3>
            <CountButton/>
        </>
    );
}

export default CountDisplay;