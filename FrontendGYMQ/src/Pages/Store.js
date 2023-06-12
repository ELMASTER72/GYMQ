import React from "react";
import '../App.css'
import { NavBar } from "../Layouts/NavBar/NavBar";
import DataStore from "../Layouts/DataStore/DataStore";
// import StoreCards from "../Ui/Cards/StoreCards";

export function Store() {
    return (
        <div>
            <div className="header"><NavBar/></div>
            <div className="categoryStore"><DataStore/></div>
        </div>
    )
}