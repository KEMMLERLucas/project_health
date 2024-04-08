import "./SuiviPatient.css";
import axios from "axios"
import { Link } from 'react-router-dom'
import Title from "./Title.jsx";
import PatientName from "./PatientName";
import React, {useState, useEffect} from "react";
import Onglets from "./Onglets.jsx";
import StatsActu from "./StatsActu.jsx";
import Graphes from "./Graphes.jsx";


function InformationPatient(){

    const [activeTab, setActiveTab] = useState("Personnelles");

    function getSexeText(sex){
        if(sex == 1){
            return "Homme"
        }else{
            return "Femme"
        }
    }

    function getActivityProfile(activityProfile){

        switch(activityProfile){
            case 'sedentary':
                return "Sédentaire";
                break;
            case 'somewhat active':
                return "Un peu actif";
                break;
            case 'highly active':
                return "Très actif";
                break;
            case 'active':
                return "actif";
                break;
            case 'low active':
                return "faiblement actif";
                break;
        }
    }

    const[patient, setPatient] = useState([])
    

    useEffect(() => {
        async function loadPatient(){
        const api="https://health.shrp.dev/items/people/00657896-d299-48a7-8a41-aae1c2b4f606"
        try{
            const response = await axios.get(api)
            const data  = await response.data.data

            setPatient(data);
            console.log(patient);
        }catch (error){
            console.error(error)
        }
        }
        loadPatient()
    }, []);

    return (
        <div>
            <Title name="Informations du patient"/>
            <div className="OngletsSuivi">
                <Onglets name="Personnelles" active={activeTab === "Personnelles"}
                         onClick={() => setActiveTab("Personnelles")}/>
                <Onglets name="Sportives" active={activeTab === "Sportives"}
                         onClick={() => setActiveTab("Sportives")}/>
            </div>

            {activeTab === "Personnelles" && (
                <div className="informationPatient">
                    <div className="formulaire">
                        <div className="champ">
                            <label htmlFor="prénom">Prénom</label>
                            <input type="text" id="prénom" placeholder={patient.firstname}/>
                        </div>

                        <div className="champ">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" id="nom" placeholder={patient.lastname}/>
                        </div>

                        <div className="champ">
                            <label htmlFor="sexe">Sexe</label>
                            <input type="text" id="Sexe" placeholder={getSexeText(patient.sex)}/>
                        </div>

                        <div className="champ">
                            <label htmlFor="dateDeNaissance">Année De Naissance</label>
                            <input type="text" id="dateDeNaissance" placeholder={patient.birthyear}/>
                        </div>

                        <div className="champ">
                            <label htmlFor="taille">Taille</label>
                            <input type="text" id="taille" placeholder={patient.height + " cm"}/>
                        </div>

                        <span className="button"><button className="primary_button">Mettre à jour les informations</button></span>
                    </div>
                </div>
            )}
            
            {activeTab === "Sportives" && (
                <div className="informationPatient">
                    <div className="formulaire">
                        <div className="champ">
                            <label htmlFor="profil">Profil sportif</label>
                            <input type="text" id="profil" placeholder={getActivityProfile(patient.activityProfile)}/>
                        </div>

                        <div className="champ">
                            <label htmlFor="poids_dep">Poids de départ</label>
                            <input type="text" id="poids_dep" placeholder={patient.weightStart}/>
                        </div>

                        <div className="champ">
                            <label htmlFor="obj">Objectif de poids</label>
                            <input type="text" id="obj" placeholder={patient.weightGoal}/>
                        </div>

                        <span className="button"><button className="primary_button">Modifier l'objectif de poids</button></span>
                    </div>
                </div>
            )}


        </div>
    )
}

export default InformationPatient


