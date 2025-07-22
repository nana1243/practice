import React from 'react';
import TodoHeader from "./TodoHeader";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

function Todo(props) {
    return (
        <div className="todo">
            <TodoHeader/>
            <TodoEditor/>
            <TodoList/>
        </div>
    );
}

export default Todo;