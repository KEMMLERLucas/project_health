import "./SuiviPatient.css";
import { Link } from 'react-router-dom'
import Title from "./Title.jsx";
import PatientName from "./PatientName";
import React, {useState} from "react";
import Onglets from "./Onglets.jsx";
import StatsActu from "./StatsActu.jsx";
import Graphes from "./Graphes.jsx";


function InformationPatient({patient}){

    const [activeTab, setActiveTab] = useState("Personnelles");

    function getSexeText(sex){
        if(sex == 1){
            return "Homme"
        }else{
            return "Femme"
        }
    }

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
                            <input type="text" id="prénom" placeholder="{patient.firstname}"/>
                        </div>

                        <div className="champ">
                            <label htmlFor="nom">Nom</label>
                            <input type="text" id="nom" placeholder="{patient.lastname}"/>
                        </div>

                        <div className="champ">
                            <label htmlFor="sexe">Sexe</label>
                            <input type="text" id="Sexe" placeholder="{getSexeText(patient.sex)}"/>
                        </div>

                        <div className="champ">
                            <label htmlFor="dateDeNaissance">Date De Naissance</label>
                            <input type="text" id="dateDeNaissance" placeholder="{patient.birthday}"/>
                        </div>

                        <div className="champ">
                            <label htmlFor="taille">Taille</label>
                            <input type="text" id="taille" placeholder="{patient.firstname}"/>
                        </div>

                        <span className="button"><button className="primary_button">Mettre à jour les informations</button></span>
                    </div>
                </div>
            )}


        </div>
    )
}

export default InformationPatient


