import "./SuiviPatient.css";
import Title from "./Title";
import ImagePatient from "./ImagePatient";
import PatientName from "./PatientName";
import Onglets from "./Onglets";
import Graphes from "./Graphes";
import StatsActu from "./StatsActu.jsx";
import Recompenses from "./Recompenses.jsx";
import React, { useState } from 'react';
import DerniersEntrainements from "./DerniersEntrainements.jsx";


function SuiviPatient({patient, activities}){
    /*console.log(patient)*/
    /*console.log(steps)*/

    /* Gerer le clicked onglet (active)*/
    const [activeTab, setActiveTab] = useState("Aujourd'hui");

    return (<div>
            <Title name="Suivi du patient"/>
            <ImagePatient patient={patient}/>
            <PatientName patient={patient}/>
            <div className="OngletsSuivi">
                <Onglets name="Aujourd'hui" active={activeTab === "Aujourd'hui"}
                         onClick={() => setActiveTab("Aujourd'hui")}/>
                <Onglets name="Historique" active={activeTab === "Historique"}
                         onClick={() => setActiveTab("Historique")}/>
                <Onglets name="Récompenses" active={activeTab === "Récompenses"}
                         onClick={() => setActiveTab("Récompenses")}/>
            </div>

            {activeTab === "Aujourd'hui" && <div className="statsActuelles">
                <StatsActu patient={patient} name="Poids actuel"/>
                <StatsActu patient={patient} name="IMC actuel"/>
            </div>}

            {activeTab === "Aujourd'hui" && <DerniersEntrainements patient={patient} activities={activities}/>}

            {activeTab === "Historique" && <Graphes patient={patient}/>}

            {activeTab === "Récompenses" && <Recompenses />} 


        </div>
    )

}

export default SuiviPatient