import React from "react";
import ImagePatient from "./ImagePatient.jsx";
import PatientName from "./PatientName.jsx";
import { Outlet, Link } from "react-router-dom";

function Patient({patient}){
    return <div className="PatientElement">
        <Link to={`/patients/${patient.id}`}>
            <ImagePatient patient={patient}/>
            <PatientName patient={patient} isSmall={true}/>
        </Link>
    </div>
}

export default Patient