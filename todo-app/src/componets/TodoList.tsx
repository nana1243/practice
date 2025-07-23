import React from 'react';
import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

interface TodoListProps {
    todos?: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
}

function TodoList(props: TodoListProps) {
    const { todos = [] , toggleTodo, deleteTodo , editTodo } = props;

    return (
        <>
            <ul className="todo__list">
                {todos.length === 0 && <TodoListEmpty/>}
                {todos.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                ))}

            </ul>

        </>
    );
}

export default TodoList;