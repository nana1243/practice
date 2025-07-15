import React from 'react';

function Input() {
    const [input, setInput] = React.useState<string>('Controlled Input');
    const [pwd , setPwd] = React.useState<string>('');


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };
    const handlePwdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPwd(event.target.value);
    }




    return (
        <>
            <h1>Input Component</h1>

            <form>
                <input type="text" name="email" value={input}  onChange={handleChange}/>
                <input type="password" value={pwd}  onChange={handlePwdChange}/>
            </form>

        </>
    );
}

export default Input;