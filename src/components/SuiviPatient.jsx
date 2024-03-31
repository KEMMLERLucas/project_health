import "./SuiviPatient.css";
import { FaCaretLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import ImagePatient from "./ImagePatient";
import PatientName from "./PatientName";
import Onglets from "./Onglets";
import StatsActu from "./StatsActu.jsx";
import React, { useState } from 'react';
import DerniersEntrainements from "./DerniersEntrainements.jsx";


function SuiviPatient({patient}){
    console.log(patient)

    /* Gerer le clicked onglet (active)*/
    const [activeTab, setActiveTab] = useState("Aujourd'hui");

    return (<div className="title"><FaCaretLeft className="icone" id="fleche"/><span>Suivi du patient</span><FaCog
            className="icone" id="rouage"/>
            <ImagePatient/>
            <PatientName patient={patient}/>
            <div className="OngletsSuivi">
                <Onglets name="Aujourd'hui" active={activeTab === "Aujourd'hui"} onClick={() => setActiveTab("Aujourd'hui")} />
                <Onglets name="Historique" active={activeTab === "Historique"} onClick={() => setActiveTab("Historique")} />
            </div>
            <div className="statsActuelles"><StatsActu patient={patient} name="Poids actuel"/><StatsActu patient={patient} name="IMC actuel"/></div>

            <DerniersEntrainements patient={patient}/>


        </div>
    )

}

export default SuiviPatient