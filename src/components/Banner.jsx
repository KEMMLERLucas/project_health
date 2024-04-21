import "./banner.css";
import React, {useEffect, useState,useContext} from 'react';
import { FaCog } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import OurContext from "./OurContext.jsx";

function Banner(){
    const [username, setUsername] = useState("");
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const contextValue = useContext(OurContext);
    const jwt = contextValue.data.access_token
    const uid = jwtDecode(jwt).id
    useEffect(() => {
        async function getUser(){
            const api = `https://health.shrp.dev/users?filter[id].=${uid}`
            try{
                setLoading(true)
                setError(false)
                const response = await axios.get(api)
                const data  = await response.data.data
                setLoading(false)
                setError(false)
                if(data.first_name ===null && data.last_name===null || data.first_name===undefined && data.last_name ===undefined){
                    setUsername("utilisateur inconnu");
                }else{
                    setUsername(`${data.first_name} ${data.last_name} `);
                }

            }catch (error){
                setLoading(false)
                setError(true)
            }
        }
        getUser()
    }, );

    return (
    <div className="banner">
        
            <span className="banner_container">
                <span className="banner_infos">
                    <div id="photo_de_profil"></div>
                    <div id="nom_connecté">
                        <span id="texte">Bienvenue {username} !</span>
                        <div className="online">
                            <FaCircle className="icone" id="circle"/> Connecté
                            </div>
                            </div>
                            </span>
                            <Link to="/infos" className="border">
                                <FaCog className="icone" id="rouage"/>
                            </Link> 
                            </span>       
    </div>
)
}

export default Banner