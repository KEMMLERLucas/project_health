import "../components/css/SuiviPatient.css";
import Title from "../components/Title.jsx";
import ImagePatient from "../components/ImagePatient.jsx";
import PatientName from "../components/PatientName.jsx";
import Onglets from "../components/Onglets.jsx";
import Graphes from "../components/Graphes.jsx";
import StatsActu from "../components/StatsActu.jsx";
import { useState } from 'react';
import DerniersEntrainements from "../components/DerniersEntrainements.jsx";
import Recompenses from "../components/Recompenses.jsx";
import {jwtDecode} from "jwt-decode";
import {useLocation} from 'react-router-dom';
import Training2 from "../components/Training2.jsx";
import Nutrition from "../components/Nutrition.jsx";
import SuiviPatientContext from "../context/SuiviPatientContext.jsx";
import Compteur from "../components/compteur.jsx";

function SuiviPatient() {
    let authenticate=false
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    /* Gerer le clicked onglet (active)*/
    const arole = "16317dcf-1e2f-4fba-969f-6f6b15ba1062"
    const location = useLocation();
    const {patient, token} = location.state;
    const [activeTab, setActiveTab] = useState("Aujourd'hui");
    const urole = jwtDecode(token.access_token).role
    /*
    Gestion du role admin grâce aux informations présente dans le token (récupérée du cookie)
     */
    if (urole === arole) {
        authenticate = true
    }


    return (<SuiviPatientContext.Provider value={{tok: token, pat: patient}}>
            <div className="all">
                <div className="infos_patients">
                <Title name="Suivi du patient" patientId={patient.id}/>
                <ImagePatient patient={patient}/>
                <PatientName patient={patient}/></div>
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


            {activeTab === "Aujourd'hui" && <div className="all">
                <Compteur patient={patient} name="Nombre de pas journaliers"/>
                <div className="statsActuelles">
                <StatsActu patient={patient} name="Poids actuel"/>
                <StatsActu patient={patient} name="IMC actuel"/>
            </div>
            <DerniersEntrainements patient={patient}/>
            </div>}

            {activeTab === "Entraînements" && <div className="all">
                <Training2 patient={patient} name="Plan d'entraînement"/>
            </div>}

            {activeTab === "Nutrition" && <div className="all">
                <Nutrition patient={patient} name="Nutrition"/>
                </div>}

                {activeTab === "Historique" &&
                    <div>
                        <Graphes patient={patient} name="Suivi du poids" chartType="line"/>
                        {authenticate && <Graphes patient={patient} name="Evolution psychique" chartType="lineEvo"/>}
                        <Graphes patient={patient} name="Suivi des activites" chartType="bar"/>
                    </div>
                }

                {activeTab === "Récompenses" && <Recompenses patient={patient}/>}
            </div>
        </SuiviPatientContext.Provider>
    )
}

export default SuiviPatient