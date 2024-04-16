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



function SuiviPatient({patient}){
    /*console.log(patient)*/
    /*console.log(steps)*/

    /* Gerer le clicked onglet (active)*/
    const [activeTab, setActiveTab] = useState("Aujourd'hui");

    return (<div>
            <Title name="Suivi du patient" patientId={patient.id} />
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

            {activeTab === "Aujourd'hui" && <DerniersEntrainements patient={patient} />}

            {activeTab === "Historique" &&
                <div>
                    <Graphes patient={patient} name="Suivi du poids" chartType="line"/>
                    <Graphes patient={patient} name="Evolution psychique" chartType="lineEvo"/>
                    <Graphes patient={patient} name="Suivi des activites" chartType="bar"/>
                </div>
            }

            {activeTab === "Récompenses" && <Recompenses patient={patient}/>} 


        </div>
    )

}

export default SuiviPatient