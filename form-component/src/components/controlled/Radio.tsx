import React, {useState} from 'react';

function Radio() {

    const [selectedOption, setSelectedOption] = useState('option1');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };


    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="option"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleChange}
                />
                Option 1
            </label>

            <label>
                <input
                    type="radio"
                    name="option"
                    value="option2"
                    checked={selectedOption === "option2"}
                    onChange={handleChange}
                />
                Option 2
            </label>

            <label>
                <input
                    type="radio"
                    name="option"
                    value="option3"
                    checked={selectedOption === "option3"}
                    onChange={handleChange}
                />
                Option 3
            </label>

        </div>
    );
}

export default Radio;