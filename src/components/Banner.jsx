import "./banner.css";
import React, {useEffect, useState} from 'react';
import { FaRegBell } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Banner(){
    const [username, setUsername] = useState("");
    return (<div className="banner">
        <div className="infos_banner">
        <Link to="/infos">
        <div className="test">
            <div id="photo"></div>
            <div id="text">
        Bienvenue LE NOM DU CONNECTE !
        <div className="online">
        <FaCircle className="icone" id="circle"/> Connecté
        </div>
        </div>
        </div></Link>
        </div>
        <FaRegBell className="icone" id="bell"/>        
    </div>)
}

export default Banner