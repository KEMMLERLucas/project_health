import React from "react";
import ImagePatient from "./ImagePatient.jsx";
import PatientName from "./PatientName.jsx";

function Patient({patient}){
    return <div className="PatientElement">
        <ImagePatient patient={patient}/>
        <PatientName patient={patient} isSmall={true}/>
    </div>
}

export default Patient