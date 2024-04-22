import React from "react";
import PatientList from "./PatientList.jsx";

function PatientPreview({patient}){
    return (<div className="PatientList">
        <PatientList patient={patient}/>
        </div>
    )
}

export default PatientPreview

