
import "./css/PatientPreview.css"

import "./css/SuiviPatient.css";
import { FaCouch } from "react-icons/fa6";
import { GrBike } from "react-icons/gr";
import { FaRocket } from "react-icons/fa";
import { FaPlane } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import {useContext} from "react";
import OnePatientContext from "../context/OnePatientContext.jsx";
import SuiviPatientContext from "../context/SuiviPatientContext.jsx";


function PatientName({patient, isSmall}){
    function calculAge(year){
        var today = new Date();
        return (today.getFullYear() - year);
    }

    function getSex(sex){
        if(sex == 1){
            return "Homme";
        } else {
            return "Femme"
        }
    }



    function getSexIcon(sex){
        if(sex == 1){
            return <IoMdMale />;
        } else {
            return <IoMdFemale />;
        }
    }

    function getActivityProfile(activityProfile){

        switch(activityProfile){
            case 'sedentary':
                return "Sédentaire";
                break;
            case 'somewhat active':
                return "Peu actif";
                break;
            case 'highly active':
                return "Très actif";
                break;
            case 'active':
                return "Actif";
                break;
            case 'low active':
                return "Légèrement actif";
                break;
        }
    }

    function getIdName(activityProfile){
        switch(activityProfile){
            case 'sedentary':
                return "sedentary";
                break;
            case 'somewhat active':
                return "somewhat_active";
                break;
            case 'highly active':
                return "highly_active";
                break;
            case 'active':
                return "active";
                break;
            case 'low active':
                return "low_active";
                break;
        }
    }

    function getIcon(activityProfile){
        switch(activityProfile){
            case 'sedentary':
                return <FaCouch/>;
                break;
            case 'somewhat active':
                return <GrBike/>;
                break;
            case 'highly active':
                return <FaRocket/>;
                break;
            case 'active':
                return <FaPlane/>;
                break;
            case 'low active':
                return <FaCar/>;
                break;
        }
    }
    if (isSmall){
        return (<div id="patientName"><span>{patient.firstname+" "+patient.lastname}</span></div>)
    }else{
        return (<div id="patientName"><span id="name">{patient.firstname+" "+patient.lastname}</span>
            <div className="tags">
                <div className="ageAndSex">{getSexIcon(patient.sex)}{getSex(patient.sex)}</div>
                <div className="ageAndSex"><FaCakeCandles/>{calculAge(patient.birthyear)}</div>
                <div className="profilActivity" id={getIdName(patient.activityProfile)}>{getIcon(patient.activityProfile)}{getActivityProfile(patient.activityProfile)}</div>
            </div>
        </div>)
    }
    
}

export default PatientName