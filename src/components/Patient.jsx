import React, {useContext} from "react";
import ImagePatient from "./ImagePatient.jsx";
import PatientName from "./PatientName.jsx";
import { Outlet, Link } from "react-router-dom";
import TokenContext from "./TokenContext.jsx";

function Patient({patient}){
    const contextValue = useContext(TokenContext);
    const token = contextValue.tok.data
    return <div className="PatientElement">
        <Link to={`/patients/${patient.id}`} state={{ patient : patient,token : token }}>
            <ImagePatient patient={patient}/>
            <PatientName patient={patient} isSmall={true}/>
        </Link>
    </div>
}

export default Patient