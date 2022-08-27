import React from "react";
import './Left.css'

export default function LeftSide(){

    return(
        <div className="leftSide">
            <div>
                <h2> Cadastre-se e receba </h2>
                <h2>a nossa Newsletter!</h2>
            </div>
            <div className="content">
                <input type="text" id="Full_Name" placeholder="Digite aqui o seu nome"/>
                <input type="email" id="email" placeholder="Digite aqui o seu e-mail"/>
                <button className="BTN" onClick="#">Cadastrar</button>
            </div>
        </div>
    );
}