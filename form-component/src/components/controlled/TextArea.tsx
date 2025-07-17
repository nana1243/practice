import React, {useState} from 'react';

function TextArea(props) {
    const [text, setText] = useState<string>('');

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);

    }

    return (
        <>
            <textarea value={text} onChange={handleTextChange}/>
            <p>입력된 텍스트 : </p>

        </>
    );
}

export default TextArea;