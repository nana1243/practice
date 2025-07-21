import React, {useState} from 'react';

interface UserInputProps {
    initValue?: string |boolean;
}

function UserInput(props :UserInputProps) {
    const { initValue } = props;
    const [value, setValue] = useState<string|boolean>(initValue || null);

    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        if(name === 'remember-me' && checked) {
            return setValue(!value);
        }
        return setValue(event.target.value);
    }


    return {
        value,
        handleValueChange
    }
}

export default UserInput;