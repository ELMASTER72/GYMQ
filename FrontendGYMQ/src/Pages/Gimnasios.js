import React from "react";
import { NavBar } from '../Layouts/NavBar/NavBar';
import '../App.css'

export function Gimnasios() {
    return (
        <div>
            <div className='header'><NavBar/></div>
            <div className="mainGym"></div>
        </div>
    )
}