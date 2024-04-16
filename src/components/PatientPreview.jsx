import React from "react";
import PatientList from "./PatientList.jsx";
import Banner from "./Banner.jsx";

function PatientPreview({patient}){
    return (<div className="PatientList">
        <PatientList patient={patient}/>
        </div>
    )
}

export default PatientPreview

