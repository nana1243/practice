import React, {useState} from 'react';


interface userInputProps {
    initialValue?: string;
    customValidationFunction?: (value: string) => string | null;
}

function userInput({ initialValue = '', customValidationFunction }: userInputProps = {}) {

    const [value, setInputValue] = useState<string>(initialValue || '');
    const [error, setError] = useState<string | null>(null);

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('this is handleValue')
        setInputValue(event.target.value);
        if (customValidationFunction) {
            setError(customValidationFunction(event.target.value) || null);
        }
    }

    return {
        value,
        error,
        handleValueChange,
    }
}

export default userInput;