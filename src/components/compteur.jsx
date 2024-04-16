import "./SuiviPatient.css";
import React, {useEffect, useState} from 'react';
import data from "./data.json";
import ProgressBar from "./ProgressBar"

function Compteur({ patient, name }) {
    
        const [jsonData, setJsonData] = useState(data);
        const [filteredData, setFilteredData] = useState([]);

        useEffect(() => {
            if(patient.id && jsonData.length>0){
                const patientData = jsonData.filter(item => item.people_id === patient.id);
                setFilteredData(patientData);
            }
        }, [patient, jsonData]);
    
        const steps = name === "Nombre de pas journaliers" ? filteredData.length > 0 ? filteredData[0].steps : "Données non disponibles" : "N/A";

        const pourcentage = Math.round((steps/6000)*100);

        let backgroundColorClass = '';
        let textColorClass = '';

        if(pourcentage > 75){
            backgroundColorClass = 'high-back';
            textColorClass = 'high-text_container';
        } else if(pourcentage > 50){
            backgroundColorClass = 'medium-back';
            textColorClass = 'medium-text_container';
        } else if(pourcentage > 25){
            backgroundColorClass = 'low-back';
            textColorClass = 'low-text_container';
        } else {
            backgroundColorClass = 'very-low-back';
            textColorClass = 'very-low-text_container';
        }

        return (
            <div className="steps_block">
                <div className="name">{name}</div>
                <div className={`steps ${backgroundColorClass}`}>
                    <div className={`nb_steps ${textColorClass}`}>{steps}
                <span id="total">/ 6000</span></div>
                <div className="pourcentage">
                <ProgressBar pourcentage={pourcentage}/></div>
                </div>
            </div>
        );
    }

export default Compteur;