interface CounterState {
    count: number;
}

interface CounterAction {
    type: 'INCREMENT' | 'DECREMENT';
}

function counterReducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case 'INCREMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return {count: state.count - 1};
        default:
            throw new Error('Unhandled action type');
    }
}

const initialState: CounterState = {count: 0};


export {
    counterReducer,
    initialState
}