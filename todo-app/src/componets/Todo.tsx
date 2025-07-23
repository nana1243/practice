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
    const toggleTodo = (id:number) => {
        setTodos((prevTodos) =>{
            return prevTodos.map(todo=>
                todo.id === id ? {...todo , completed: !todo.completed } : todo
            )
        })
    };
    const deleteTodo = (id:number) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    }

    const editTodo = (id: number, newText: string) => {
        setTodos((prevTodo)=> {
            return prevTodo.map(data=> {
                return data.id === id ? {...data, text: newText} : data;
            })
        })
    }

    return (
        <div className="todo">
            <TodoHeader/>
            <TodoEditor addTodo={addTodo}/>
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </div>
    );
}

export default Todo;