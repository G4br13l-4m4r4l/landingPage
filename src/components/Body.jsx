import React from "react";
import LeftSide from "./small-components/Left.jsx";
import RightSide from "./small-components/Right.jsx";
import './Body.css';


export default function Body(){
    return(
        <div className="main">
            <LeftSide/>
            <RightSide/>
        </div>
    );
}