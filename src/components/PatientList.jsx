import React from "react";
import Patient from "./Patient.jsx";
import OnePatientContext from "../context/OnePatientContext.jsx";


function PatientList({patient}){
    return (<OnePatientContext.Provider value={patient}>
            <div className="PatientList">
                <Patient patient={patient}/>
            </div>
        </OnePatientContext.Provider>
    )
}

export default PatientList