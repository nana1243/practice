import React from 'react';

interface CheckBoxProps {
    name: string;
    value: string;
    onChange: () => void;
}


function CheckBox(props) {
    const { name, value, onChange } = props;
    return (
        <>
            <label>
                <input
                    type="checkbox"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </>
    );
}

export default CheckBox;