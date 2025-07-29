import React, {useState} from 'react';
import Input from "./html/Input";
import Button from "./html/Button";
import {useTodoStore} from "../store/todoStore";

// interface TodoEditorProps {
//     addTodo: (text: string) => void;
// }

function TodoEditor() {
    // const { addTodo } = props;
    const addTodo = useTodoStore((state) => state.addTodo);

    const [text, setText] = useState<string>('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTodo(text);
        setText('');  // Clear the input field after adding the todo
    }


    return (
        <>
            <form className="todo__form" onSubmit={handleOnSubmit}>
                <div className="todo__editor">
                    <Input
                        type="text"
                        className="todo__input"
                        placeholder="Enter Todo List"
                        value={text}
                        onChange={handleOnChange}
                    />
                    <Button className="todo__button" type="submit">Add</Button>
                </div>
            </form>
        </>
    );
}

export default TodoEditor;