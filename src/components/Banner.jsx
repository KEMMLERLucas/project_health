import "./banner.css";
import React from 'react';
import { FaCircle, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Banner(){
    return (
    <div className="banner">
        <Link to="/infos">
            <span className="banner_container">
            <span className="banner_infos">
            <div id="photo_de_profil"></div>
            <div id="nom_connecté">
                <span id="texte">Nom</span>
                <div className="online">
                    <FaCircle className="icone" id="circle"/> Connecté
                </div>
            </div>
            </span>
            <span className="border">
                <FaCog className="icone" id="rouage"/></span>
            </span>
        </Link>     
    </div>
    )
}

export default Banner