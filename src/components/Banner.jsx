import "./banner.css";
import React, { useState } from 'react';
import { FaRegBell } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

function Banner(){
    return (<div className="banner">
        <div className="infos_banner">
        <div class="test">
            <div id="photo"></div>
            <div id="text">
        Bienvenue Yoann !
        <div className="online">
        <FaCircle className="icone" id="circle"/> Connecté
        </div>
        </div>
        </div>
        </div>
        <FaRegBell className="icone" id="bell"/>        
    </div>)
}

export default Banner