import React from 'react';
// import ChildC from "./ChildC";

function ChildB(props) {
    const randomNumber = Math.floor(Math.random() * 2 +1);
    if( randomNumber === 1) {
        throw new Error('ChildB Error');
    }

    return (
        <>
            <h1>Child B</h1>
        </>
    );
}

// export default ChildB
export default React.memo(ChildB);