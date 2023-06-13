import React from "react";
import { NavBar } from '../Layouts/NavBar/NavBar';
import '../App.css'
import Information from "../Ui/Cards/InformationCards";

export function Gimnasios() {
    return (
        <div className="containerGymInformation">
            <div className='header'><NavBar/></div>
            <div className="mainGym"><Information/></div>
        </div>
    )
}