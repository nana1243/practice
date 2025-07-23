import React from 'react';
import CheckBox from "./html/CheckBox";
import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import Input from "./html/Input";

interface TodoListItemProps {
    todo : Todo
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newText: string) => void;
}

function TodoListItem(props:TodoListItemProps){
    const { todo, toggleTodo, deleteTodo, editTodo } = props;
    const [isModifying, setIsModifying] = React.useState<boolean>(false);
    const [modifyText, setModifyText] = React.useState<string>(todo.text);

    const handleModify = (event) => {
        if(isModifying && modifyText.trim() !== "" && modifyText !== todo.text) {
            editTodo(todo.id, modifyText);
        }
        setIsModifying(!isModifying);

    }

    const onModifyTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModifyText(event.target.value);
    }

    return (
        <>
            <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>

                {!isModifying &&
                    <CheckBox
                        parentClassName="todo__checkbox-group"
                        type="checkbox"
                        className="todo__checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}>
                        {todo.text}
                    </CheckBox>
                }

                {isModifying && <input type="text" className="todo__modify-input" onChange={onModifyTextChange}/>}
                    <div className="todo__button-group">
                    <Button
                        className="todo__action-button"
                        onClick={handleModify}
                    >
                        <SvgPencil/>
                    </Button>
                    <Button
                        className="todo__action-button"
                        onClick={() => deleteTodo(todo.id)}
                    >
                        <SvgClose/>
                    </Button>
                </div>
            </li>

        </>
    );
}

export default TodoListItem;