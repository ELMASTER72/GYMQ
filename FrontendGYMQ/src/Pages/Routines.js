import React from "react";
import '../App.css'
import { HomeNavBar } from "../Layouts/HomeNavBar";
import Components from "../Layouts/Components";
import CardList from "../Layouts/CardList";

export function Routines() {
    return (
        <div className="store">
            <div className='home_header'>
                <div><HomeNavBar/></div>
            </div>
            <Components/>
            <div className="routineCards">
                <CardList/>
            </div>
        </div>
    )
} 