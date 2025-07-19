import React, {useRef} from 'react';

function CheckBox() {
    const privacyRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(privacyRef.current.checked);
        if (!privacyRef.current.checked) {
            alert("개인 정보 동의를 해주세요.");
            return;
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="checkbox" ref={privacyRef} />
                <label>개인 정보 동의</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CheckBox;