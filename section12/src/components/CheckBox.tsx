import React, {useId} from 'react';

function CheckBox() {
    const uuid = useId();

    return (
        <>
            <input type="checkbox"  id={uuid}/>
            <label htmlFor="apple">사과</label>
        </>
    );
}

export default CheckBox;