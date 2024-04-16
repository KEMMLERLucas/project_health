import React from "react";
import Patient from "./Patient.jsx";


function PatientList({patient}){
    return (<div className="PatientList">
        <Patient patient={patient}/>
    </div>)
}

export default PatientList