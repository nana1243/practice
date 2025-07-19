import React from 'react';

interface InputTextProps {
    name : string;
    placeholder?: string;
    value: string;
    onChange: () => void;
}


function InputText(props) {
    const { name, placeholder, value, onChange } = props;

    return (
        <>
            <p>{name}</p>
            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}

            />

        </>
    );
}

export default InputText;