import React from 'react';
import ChildB from "./ChildB";

function ChildA(props) {
    console.log('Child A rendered');
    return (
        <>
            <h1>Child A</h1>
            <ChildB/>
        </>
    );
}

// export default ChildA;
export default React.memo(ChildA);