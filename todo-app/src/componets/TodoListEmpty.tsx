import React from 'react';

function TodoListEmpty() {
    return (
        <>
            {/* 할 일 목록이 없을 때 */}
            <li className="todo__item todo__item--empty">
                <p className="todo__text--empty">There are no registered tasks</p>
            </li>
        </>
    );
}

export default TodoListEmpty;