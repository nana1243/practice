import React from 'react';
import CheckBox from "./html/CheckBox";
import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import Input from "./html/Input";
import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

function TodoList(props) {
    return (
        <>
            <ul className="todo__list">
                <TodoListEmpty/>
                <TodoListItem/>
            </ul>

        </>
    );
}

export default TodoList;