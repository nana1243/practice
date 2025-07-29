import React from 'react';
import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";
import {useTodoStore} from "../store/todoStore";

// interface TodoListProps {
//     todos?: Todo[];
//     toggleTodo: (id: number) => void;
//     deleteTodo: (id: number) => void;
//     editTodo: (id: number, newText: string) => void;
// }

function TodoList() {
    const todos = useTodoStore((state) => state.todos);
    const toggleTodo = useTodoStore((state) => state.toggleTodo);
    const deleteTodo = useTodoStore((state) => state.deleteTodo);
    const editTodo = useTodoStore((state) => state.editTodo);


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