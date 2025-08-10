import React from 'react';
import {Outlet} from "react-router";

function Layout(props) {
    return (
        <>
            <header>Header</header>
            <main>
                <Outlet/>
            </main>
            <footer>Footer</footer>
        </>
    );
}

export default Layout;