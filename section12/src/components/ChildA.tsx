import React from 'react';
import ChildB from "./ChildB";

interface ChildAProps {
    count: number;
}

function ChildA(props :ChildAProps) {
    const { count } = props;
    console.log('Child A rendered');
    console.log('Child A props:', count);
    return (
        <>
            <h1>Child A</h1>
            <ChildB/>
        </>
    );
}

// export default ChildA;
export default React.memo(ChildA);