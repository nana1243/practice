interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

type TodoAction =
    { type: 'ADD_TODO', text: string } |
    { type: 'REMOVE_TODO', id: number } |
    { type: 'TOGGLE_TODO', id: number };

function todoReducer(state: Todo[], action: TodoAction) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {id: Date.now(), text: action.text, completed: false}];
        case 'REMOVE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map((todo) => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
        default:
            throw new Error('Unhandled action type');

    }

}

const initialTodoState: Todo[] = [
    {id: 1, text: 'Learn TypeScript', completed: false},
    {id: 2, text: 'Build a React App', completed: false},
    {id: 3, text: 'Master Redux', completed: false}
]


export {
    todoReducer,
    initialTodoState
}