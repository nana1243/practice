import React from 'react';

interface ErrorProps {
    error: Error;
    resetErrorBoundary: () => void;
}

function Error(props:ErrorProps) {
    const {error, resetErrorBoundary} = props;


    return (
        <div role="alert">
            <p>Something went wrong!</p>
            <pre style={{color:"red"}}>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

export default Error;