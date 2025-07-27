import React from 'react';
import {useCountStore} from "../store/countStore";

function CountOutside(props) {
    const count = useCountStore(state => state.count);

    return (
        <>
            <h3>CountOutSide : {count}</h3>
        </>
    );
}

export default CountOutside;