import React from "react";
import Imagem from '../assets/primeiro.jpg';
import './Right.css';

export default function RightSide(){

    return(
        <div>
            <img className="Imagem" src={Imagem} alt="fundo"/>
        </div>
    );
}