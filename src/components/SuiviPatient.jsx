import "./SuiviPatient.css";
import Title from "./Title";
import ImagePatient from "./ImagePatient";
import PatientName from "./PatientName";
import Onglets from "./Onglets";
import Graphes from "./Graphes";
import StatsActu from "./StatsActu.jsx";
import React, {useEffect, useState} from 'react';
import DerniersEntrainements from "./DerniersEntrainements.jsx";
import Recompenses from "./Recompenses.jsx";
import {useParams} from "react-router-dom";
import { withCookies, Cookies } from 'react-cookie';
import axios from "axios";
import Compteur from "./compteur.jsx";

function SuiviPatient(){
    let { patientId } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [patient, setPatient] = useState([])
    useEffect(() => {
        async function getPatient(){
            const api = `https://health.shrp.dev/items/people/${patientId}`
            try{
                setLoading(true)
                setError(false)
                const response = await axios.get(api)
                const data  = await response.data.data

                setLoading(false)
                setError(false)

                setPatient(data);
            }catch (error){
                console.error(error)
                setLoading(false)
                setError(true)
            }
        }
        getPatient()
    }, [patientId]);

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

            {activeTab === "Aujourd'hui" && <div className="all">
                <Compteur patient={patient} name="Nombre de pas journaliers"/>
                <div className="statsActuelles">
                <StatsActu patient={patient} name="Poids actuel"/>
                <StatsActu patient={patient} name="IMC actuel"/>
            </div>
            </div>}

            {activeTab === "Aujourd'hui" && <DerniersEntrainements patient={patient} />}

            {activeTab === "Historique" &&
                <div>
                    <Graphes patient={patient} name="Suivi du poids" chartType="line"/>
                    <Graphes patient={patient} name="Suivi des activites" chartType="bar"/>
                </div>
            }

            {activeTab === "Récompenses" && <Recompenses patient={patient}/>}


        </div>
    )

}

export default SuiviPatient