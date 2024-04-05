import "./PatientPreview.css"
import PatientName from "./PatientName.jsx";
import React from "react";
import ImagePatient from "./ImagePatient.jsx";
function PatientPreview({patient}){
    console.log(patient)
    return <div className="PatientList">
        <ImagePatient patient={patient}/>
        <PatientName patient={patient} isSmall={true}/>
    </div>
}

export default PatientPreview