import React from 'react';
import CheckBox from "./html/CheckBox";
import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import Input from "./html/Input";
import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

interface TodoListProps {
    todos?: Todo[];
}

function TodoList(props: TodoListProps) {
    const { todos = [] } = props;

    return (
        <>
            <ul className="todo__list">
                {todos.length === 0 && <TodoListEmpty/>}
                {todos.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo}/>
                ))}

            </ul>

        </>
    );
}

export default TodoList;