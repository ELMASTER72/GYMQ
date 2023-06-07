import React from "react";
import '../App.css'
import CardComponent from "../Layouts/CardComponent";
import CardList from "../Layouts/CardList";
import { NavBarUser } from "../Layouts/NavBarUser";

export function RoutinesUser() {
    return (
        <div className="store">
            <div className='home_header'>
                <div><NavBarUser/></div>
            </div>
            <CardComponent/>
            <div className="tarjetas">
                <CardList/>
            </div>
        </div>
    )
}