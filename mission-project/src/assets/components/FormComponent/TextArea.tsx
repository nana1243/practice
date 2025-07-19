import React from 'react';

interface TextAreaProps {
    name: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
}

function TextArea(props:TextAreaProps){
    const { name, placeholder, value, onChange, rows, cols } = props as TextAreaProps;

    return (
        <>
            <textarea
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={rows || 3}
                cols={cols || 20}
            />
        </>
    );
}

export default TextArea;