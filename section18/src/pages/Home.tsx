import React from 'react';
import {NavLink} from "react-router";

function Home(props) {
    return (
        <div>
            <h2>Home222222222222!</h2>
            <NavLink className={({isActive}) =>
                isActive ? "active-link" : ""} to={ "/about" }
                viewTransition
            >
                About</NavLink>
            <NavLink to={"/dashboard" }>Dashboard</NavLink>
            <NavLink to={"/dashboard/settings" }>Dashboard Settings</NavLink>
            <NavLink to={"/post?1"}>Post 1</NavLink>
            <NavLink to={"/post/1/detail/2"}>Post 1 Detail 2</NavLink>

        </div>
    );
}

export default Home;