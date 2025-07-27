import React from 'react';
import ChildB from "./ChildB";

interface ChildAProps {
    increment: () => void;
}

function ChildA(props :ChildAProps) {
    console.log('Child A rendered');
    const { increment } = props;

    return (
        <>
            <h1>Child A</h1>
            <ChildB/>
        </>
    );
}

// export default ChildA;
export default React.memo(ChildA);