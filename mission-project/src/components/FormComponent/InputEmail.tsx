import React from 'react';

interface InputTextProps {
    name : string;
    placeholder?: string;
    value: string;
    onChange: () => void;
}

function InputEmail(props) {
    const { name, placeholder, value, onChange } = props;

    return (
        <>
            <p>{name}</p>
            <input
                type="email"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    );
}

export default InputEmail;