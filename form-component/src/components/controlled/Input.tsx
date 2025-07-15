import React from 'react';

function Input() {
    const [input, setInput] = React.useState<string>('');
    const [pwd , setPwd] = React.useState<string>('');

    const [formState, setFormState] = React.useState({
        email: '',
        pwd : ''
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };
    const handlePwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(event.target.value);
    }


    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <>
            <h1>Input Component : {formState.email} / {formState.pwd}</h1>

            <form>
                <input type="text" name="email" value={formState.email}  onChange={handleFormChange}/>
                <input type="password" name="pwd" value={formState.pwd}  onChange={handleFormChange}/>
            </form>

        </>
    );
}

export default Input;