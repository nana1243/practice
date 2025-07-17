import React, {useState} from 'react';

function CheckBox() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [formState, setFormState] = useState({
        checked1: false,
        checked2: false
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1(event.target.checked);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked2(event.target.checked);
    }

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        console.log('name', name)
        console.log('checked', checked)
        setFormState(prevState => ({
            ...prevState,
            [name]: checked
        }));
    }

    return (
        <div>
            <form >
                <input type="checkbox" name="checked1" id="item1" checked={formState.checked1} onChange={handleFormChange} />
                <label htmlFor="item1">Item 1 : check ? :{String(formState.checked1)}</label>

                <input type="checkbox" id="item2" name="checked2" checked={formState.checked2} onChange={handleFormChange} />
                <label htmlFor="item2">Item 2 : check ? :{String(formState.checked2)}</label>
            </form>
        </div>
    );
}

export default CheckBox;