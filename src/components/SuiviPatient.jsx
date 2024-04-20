import "./SuiviPatient.css";
import Title from "./Title";
import ImagePatient from "./ImagePatient";
import PatientName from "./PatientName";
import Onglets from "./Onglets";
import Graphes from "./Graphes";
import StatsActu from "./StatsActu.jsx";
import { useState } from 'react';
import DerniersEntrainements from "./DerniersEntrainements.jsx";
import Recompenses from "./Recompenses.jsx";

import {useParams} from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import axios from "axios";
import Compteur from "./compteur.jsx";
import Training2 from "./Training2.jsx";
import Nutrition from "./Nutrition.jsx";



function SuiviPatient({patient}){
    let authenticate = false; /*Permet de savoir si l'utilisateur est admin ou non. Si il l'est, on affiche l'évolution psychique
    du patient sous forme de graphique (onglet Historique), sinon on ne l'affiche pas (évite des erreurs sur les requêtes si le token n'est 
    pas bon)
    Passer à true pour tester + trouver un token admin  
    A voir comment le gérer au moment de merge, mais je pense qu'on pourrait connaître le rôle de l'utilisateur avec les cookies ? 
    */ 

    /* Gerer le clicked onglet (active)*/
    const [activeTab, setActiveTab] = useState("Aujourd'hui");

    return (<div className="all">
            <Title name="Suivi du patient" patientId={patient.id} />
            <ImagePatient patient={patient}/>

            <PatientName patient={patient}/>
            <div className="horizontal-menu-container">
            <div className="OngletsSuivi">
                <Onglets name="Aujourd'hui" active={activeTab === "Aujourd'hui"}
                         onClick={() => setActiveTab("Aujourd'hui")} className="test"/>
                <Onglets name="Entraînements" active={activeTab === "Entraînements"}
                         onClick={() => setActiveTab("Entraînements")}/>
                <Onglets name="Historique" active={activeTab === "Historique"}
                         onClick={() => setActiveTab("Historique")}/>
                <Onglets name="Nutrition" active={activeTab === "Nutrition"}
                         onClick={() => setActiveTab("Nutrition")}/>                         
                <Onglets name="Récompenses" active={activeTab === "Récompenses"}
                         onClick={() => setActiveTab("Récompenses")}/>
            </div>
            </div>

            {activeTab === "Aujourd'hui" && <div className="statsActuelles">
                <StatsActu patient={patient} name="Poids actuel"/>
                <StatsActu patient={patient} name="IMC actuel"/>
            </div>}

            {activeTab === "Entraînements" && <div className="all">
                <Training2 patient={patient} name="Plan d'entraînement"/>
            </div>}

            {activeTab === "Nutrition" && <div className="all">
                <Nutrition patient={patient} name="Nutrition"/>
                </div>}

            {activeTab === "Aujourd'hui" && <DerniersEntrainements patient={patient} />}

            {activeTab === "Historique" &&
                <div className="graphes">
                    <Graphes patient={patient} name="Suivi du poids" chartType="line"/>
                    {authenticate && <Graphes patient={patient} name="Evolution psychique" chartType="lineEvo"/>}
                    <Graphes patient={patient} name="Suivi des activites" chartType="bar"/>
                </div>
            }

            {activeTab === "Récompenses" && <Recompenses patient={patient}/>} 


        </div>
    )

}

export default SuiviPatient