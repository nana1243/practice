import React from 'react';
import {useCountStore} from "../store/countStore";

function CountButton() {
    const increase = useCountStore(state => state.increment);
    const decrease = useCountStore(state => state.decrement);
    const reset = useCountStore(state => state.reset);

    return (
        <>
            <button onClick={() => increase(5)}> increase + 5 </button>
            <button onClick={decrease}> decrease </button>
            <button onClick={reset}> reset </button>
        </>
    );
}

export default CountButton;