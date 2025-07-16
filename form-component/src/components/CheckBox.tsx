import React, {useState} from 'react';

function CheckBox() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    return (
        <div>
            <input type="checkbox" id="item1" checked={checked} onChange={handleChange} />
            <label htmlFor="item1">Item 1 : check ? :{String(checked)}</label>
        </div>
    );
}

export default CheckBox;