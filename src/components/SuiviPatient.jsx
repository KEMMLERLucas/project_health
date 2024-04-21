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
import {jwtDecode} from "jwt-decode";
import {useLocation} from 'react-router-dom';
import Training2 from "./Training2.jsx";
import Nutrition from "./Nutrition.jsx";
import SuiviPatientContext from "./SuiviPatientContext.jsx";
import Compteur from "./compteur.jsx";



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


    return (<SuiviPatientContext.Provider value={{tok: token, pats: patient}}>
            <div className="all">
                <Title name="Suivi du patient" patientId={patient.id}/>
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


            {activeTab === "Aujourd'hui" && <div className="all">
                <Compteur patient={patient} name="Nombre de pas journaliers"/>
                <div className="statsActuelles">
                <StatsActu patient={patient} name="Poids actuel"/>
                <StatsActu patient={patient} name="IMC actuel"/>
            </div>
            </div>}

            {activeTab === "Entraînements" && <div className="all">
                <Training2 patient={patient} name="Plan d'entraînement"/>
            </div>}

            {activeTab === "Nutrition" && <div className="all">
                <Nutrition patient={patient} name="Nutrition"/>
                </div>}

                {activeTab === "Entraînements" && <div className="all">
                    <Training2 patient={patient} name="Plan d'entraînement"/>
                </div>}

                {activeTab === "Nutrition" && <div className="all">
                    <Nutrition patient={patient} name="Nutrition"/>
                </div>}

                {activeTab === "Aujourd'hui" && <DerniersEntrainements patient={patient}/>}

                {activeTab === "Historique" &&
                    <div className="graphes">
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