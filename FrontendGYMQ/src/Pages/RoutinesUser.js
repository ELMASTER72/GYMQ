import React from "react";
import '../App.css'
import Components from "../Layouts/Components";
import CardList from "../Layouts/CardList";
import { UserNavBar } from '../Layouts/NavBar/UserNavBar';

export function RoutinesUser() {
    return (
        <div className="store">
            <div className='header'><UserNavBar/></div>
            <div className="listRoutines">
                <div className="containerRoutines"><Components/></div>
                <CardList/>
            </div>
        </div>
    )
} 