import React from "react";
import PatientList from "./PatientList.jsx";
function PatientPreview({patient}){
    return (<div className="PatientPreview">
        <h3>Mes patients</h3>
        <PatientList patient={patient}/>
    </div>)
}

export default PatientPreview

