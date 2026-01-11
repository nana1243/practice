import {useReducer} from 'react';
import {counterReducer, initialState} from "../reducer/count";

function Calculator() {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <>
            <div>
                <p>Count : {state.count}</p>
                <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
                <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
            </div>
        </>
    )
}


export default Calculator;