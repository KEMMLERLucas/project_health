import React from "react";
import PatientList from "./PatientList.jsx";
import Banner from "./Banner.jsx";

function PatientPreview({patient}){
    return (<div className="PatientList">
        <Banner/>
        <p>Mes patients</p>
        <PatientList patient={patient}/>
        </div>
    )
}

export default PatientPreview

