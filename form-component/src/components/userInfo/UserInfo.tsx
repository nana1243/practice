import React from 'react';
import userInput from "../../hooks/userInput";

function UserInfo() {
    const {value: email, handleValueChange: handleEmailChange} = userInput('');
    const {value: pwd, handleValueChange: handlePwdChange} = userInput('');
    const {value: name, handleValueChange: handleNameChange} = userInput('');

    const inputs = [
        { id:'email', value: email, onChange: handleEmailChange, placeholder: 'Enter your email' },
        { id:'pwd', value: pwd, onChange: handlePwdChange, placeholder: 'Enter your password' },
        { id:'name', value: name, onChange: handleNameChange, placeholder: 'Enter your name' }
    ]
    const SAFE_GMAIL_REGEX_STRING = "^[a-z0-9._%+-]+@gmail\\.com$"; // 실제 JS 문자열 리터럴

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailError = validateEmail(email);
        if(emailError){
            alert(emailError);
            return;
        }
        console.log({email, pwd, name })
    }

    const validateEmail = (email: string) => {
        if(!email) {
            return 'Email is required';
        }
        if(!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
            return 'Invalid gmail format';
        }
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
                        pattern={data.id === 'email' ? SAFE_GMAIL_REGEX_STRING : undefined}                    />
                )}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default UserInfo;