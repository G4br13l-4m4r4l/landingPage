import React from "react";
import Menu from "./menu";
import './header.css';
export default function Head(){
    return(
        <div className="titled-menu">
            <div className="title"><a href="#">Landing Page</a></div>
            <div className="menu">
                <ul>
                    <Menu props="Inicio"/>
                    <Menu props="Sobre" />
                    <Menu style={{color: "#161a1d"}} props="Cadastrar"/>
                </ul>
            </div>
        </div>
    );
}