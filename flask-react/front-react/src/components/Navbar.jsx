import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <div class="navbar-brand">
                <h1>Hola</h1>
                <ul>
                    <li>
                        <Link className="btn btn-primary" to={`/`}>Home</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}


export default Navbar;