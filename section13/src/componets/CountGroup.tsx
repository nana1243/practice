import React from 'react';
import CountDisplay from "./CountDisplay";
import CountOutside from "./CountOutside";

function CountGroup(props) {
    return (
        <>
         <CountDisplay/>
         <CountOutside/>
        </>
    );
}

export default CountGroup;