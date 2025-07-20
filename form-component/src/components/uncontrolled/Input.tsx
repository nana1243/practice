import React, {Ref, useRef} from 'react';

interface InputProps {
    inputRef: Ref<HTMLInputElement>;
}

function Input(props:InputProps) {
    const { inputRef } = props;

    // const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (inputRef?.current) {
            console.log(inputRef?.current.value);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                ref={inputRef}
                placeholder="Enter text"
            />
        </form>
    );
}

export default Input;