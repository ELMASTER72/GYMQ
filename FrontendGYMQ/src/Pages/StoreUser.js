import React from "react";
import '../App.css'
import { UserNavBar } from "../Layouts/NavBar/UserNavBar";
import DataStore from "../Layouts/DataStore/DataStore";

export function StoreUser() {
    return (
        <div>
            <div className="header"><UserNavBar/></div>
            <div className="categoryStore"><DataStore/></div>
        </div>
    )
}