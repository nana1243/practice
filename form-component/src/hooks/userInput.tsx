import React, {useState} from 'react';

function userInput(initialValue: string = '') {
    const [value, setInputValue] = useState<string>(initialValue);
    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('this is handleValue')
        setInputValue(event.target.value);
    }

    return {
        value,
        handleValueChange,
    }
}

export default userInput;