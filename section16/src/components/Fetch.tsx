import React, {useEffect} from 'react';

function Fetch() {
    useEffect(() => {
        fetch('http://localhost:3000/posts').then(r => console.log(r))

    },[])

    return (
        <>
            <h1>Fetch</h1>
        </>
    );
}

export default Fetch;