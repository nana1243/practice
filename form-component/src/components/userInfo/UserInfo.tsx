import React from 'react';
import userInput from "../../hooks/userInput";

function UserInfo() {
    const {value: email, handleValueChange: handleEmailChange} = userInput('');
    const {value: pwd, handleValueChange: handlePwdChange} = userInput('');
    const {value: name, handleValueChange: handleNameChange} = userInput('');

    const inputs = [
        { value: email, onChange: handleEmailChange, placeholder: 'Enter your email' },
        { value: pwd, onChange: handlePwdChange, placeholder: 'Enter your password' },
        { value: name, onChange: handleNameChange, placeholder: 'Enter your name' }
    ]

    const handleSubmit = (e:React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log({email, pwd, name })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {inputs.map((data, index) =>
                    <input
                        key={index}
                        type="text"
                        value={data.value}
                        onChange={data.onChange}
                        placeholder={data.placeholder}
                        required
                        minLength={4}
                        maxLength={20}
                    />
                )}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default UserInfo;