import React from 'react';
import ChildC from "./ChildC";

function ChildB(props) {
    console.log('Child B rendered');
    return (
        <>
            <h1>Child B</h1>
            <ChildC/>
        </>
    );
}

// export default ChildB
export default React.memo(ChildB);