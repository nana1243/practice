import {useReducer, useState} from "react";
import {initialTodoState, todoReducer} from "../reducer/todo";

function TodoList() {

    const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
    const [newTodoText, setNewTodoText] = useState('');

    const handleAddTodo = () => {
        if (newTodoText.trim() === '') return;
        dispatch({type: 'ADD_TODO', newTodoText});
        setNewTodoText('')
    }

    return (
        <>
            <div>
                <p>Todo List Component</p>

                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder="Enter new todo"
                />
                <button onClick={handleAddTodo}>추가</button>

                <ul>
                    {todos.map(todo => (
                        <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>

                            {/* 완료 상태 토글 버튼 */}
                            <span onClick={() => dispatch({type: 'TOGGLE_TODO', id: todo.id})}>
                            {todo.text}
                            </span>

                            {/* 삭제 버튼 */}
                            <button onClick={() => dispatch({type: 'REMOVE_TODO', id: todo.id})}
                                    style={{marginLeft: '10px'}}>
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


export default TodoList;