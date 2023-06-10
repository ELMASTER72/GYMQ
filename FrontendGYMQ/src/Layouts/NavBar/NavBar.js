import React from "react";
import { useLocation } from 'react-router-dom'
import ModalWindow from "../Modal";

const NavBar = () => {
    const location = useLocation();

    return (
        <nav className="navBar">
            <ul className="navBarList">
                <li className={location.pathname === '/' ? 'active' : ''}>
                    <a to='/'>Inicio</a>
                </li>
                <li className={location.pathname === '/Rutinas' ? 'active' : ''}>
                    <a to='/Rutinas'>Rutinas</a>
                </li>
                <li className={location.pathname === '/Gimnasios' ? 'active' : ''}>
                    <a to='/Gimnasios'>Gimnasios</a>
                </li>
                <li className={location.pathname === '/Gimnasios' ? 'active' : ''}>
                    <a to='/Gimnasios'>Tienda</a>
                </li>
            </ul>
            <div className="navBarModal">
                <ModalWindow/>
            </div>
        </nav>
    )
}

export default NavBar;