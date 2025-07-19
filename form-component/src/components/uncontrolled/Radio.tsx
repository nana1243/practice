import React from 'react';

function Radio() {
    const formRef = React.useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const formData = new FormData(formRef.current!);
        console.log(formData.get('option')); // Log the selected radio button value
    };


    return (
        <form ref={formRef} onSubmit={handleSubmit}>
            <label>
                <input
                    type="radio"
                    name="option"
                    value="option1"
                />
                Option 1
            </label>

            <label>
                <input
                    type="radio"
                    name="option"
                    value="option2"
                    defaultChecked={true}
                />
                Option 2
            </label>

            <label>
                <input
                    type="radio"
                    name="option"
                    value="option3"
                />
                Option 3
            </label>

            <button type="submit">Submit</button>
        </form>
    );
}

export default Radio;