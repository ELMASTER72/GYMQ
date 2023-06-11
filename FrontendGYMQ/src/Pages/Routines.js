import React from "react";
import '../App.css'
import Components from "../Layouts/Components";
import CardList from "../Layouts/CardList";
import { NavBar } from '../Layouts/NavBar/NavBar';

export function Routines() {
    return (
        <div className="store">
            <div className='header'><NavBar/></div>
            <div className="listRoutines">
                <div className="containerRoutines"><Components/></div>
                <CardList/>
            </div>
        </div>
    )
} 