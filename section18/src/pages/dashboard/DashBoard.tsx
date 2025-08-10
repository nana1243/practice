import React from 'react';
import {Outlet} from "react-router";


function DashBoard() {
    return (
        <>
            <h1>DashBoard</h1>
            <Outlet />
        </>
    );
}

export default DashBoard;