import React from 'react';
import TodoHeader from "./TodoHeader";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";


function Todo(props) {
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos((prevTodo)=>{
            return [...prevTodo, newTodo];
        });
    }

    return (
        <div className="todo">
            <TodoHeader/>
            <TodoEditor addTodo={addTodo}/>
            <TodoList/>
        </div>
    );
}

export default Todo;