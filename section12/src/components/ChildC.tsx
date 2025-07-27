import React from 'react';

function ChildC(props) {
    console.log('Child C rendered');
    return (
        <>
            <h1>Child C</h1>
        </>
    );
}

export default React.memo(ChildC);