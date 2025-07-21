import React, {useState} from 'react';
import userInput from "../../hooks/userInput";

function Login() {
    const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const {value : email, handleValueChange : handleEmailChange } = userInput({initValue:''});
    const {value : pwd, handleValueChange : handlePwdChange } = userInput({initValue:''});
    const {value : rememberMe, handleValueChange : handleRememberMeChange } = userInput({initValue:false});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ email, pwd, rememberMe });
    };

    const validateEmail = (email: string) => {
        if(!email){
            return false;
        }
        return !REGEX_EMAIL.test(email);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-[375px] rounded-lg bg-white border border-gray-300 py-10 px-6 text-gray-700">
                <h1 className="text-xl font-bold mb-2.5">로그인</h1>
                <p className="text-sm mb-5">계속하려면 세부 정보를 입력하세요.</p>
                <form className="grid gap-4">

                    {/* Email Input */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            className="input-field"
                            pattern={REGEX_EMAIL}
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        {validateEmail(email) && <p className="mt-2 text-sm text-rose-500">
                            이메일이 유효하지 않습니다.
                        </p>}
                    </div>

                    {/* Password Input */}
                    <div>
                        <div className="relative">
                        <input
                            type="password"
                            name="password"
                            className="input-field"
                            placeholder="Enter Password"
                            value={pwd}
                            onChange={handlePwdChange}
                            minLength={8}
                            required
                        />
                        </div>
                        <button
                            type="button"
                            className="absolute top-1/2 right-3 w-6 -translate-y-1/2 cursor-pointer"
                        >
                            <img src="/eyes-closed.svg" alt="Toggle password visibility" />
                        </button>
                    </div>

                    {/* Remember Me */}
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        checked={rememberMe ===true}
                        onChange={handleRememberMeChange}
                    />

                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;