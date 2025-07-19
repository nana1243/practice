import React from 'react';


interface InputRadioProps{
    name: string;
    value: string;
    checked?: boolean;
    onChange: () => void;
}

function InputRadio(props) {
    const { name, value, checked, onChange } = props;

    return (
        <>
            <label>
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                {value}
            </label>
        </>
    );
}

export default InputRadio;