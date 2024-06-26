import "./css/SuiviPatient.css";
import "./PatientName"
import {useContext, useEffect, useState} from "react";
import OnePatientContext from "../context/OnePatientContext.jsx";
import SuiviPatientContext from "../context/SuiviPatientContext.jsx";

function ImagePatient({patient} ){
    const [img, setImg] = useState("");

    useEffect(() => {
        const json = JSON.parse(localStorage.getItem("patients"));
        if (json && json[patient.id]) {
            setImg(json[patient.id]);
        }
    }, [patient]);

    return <div><img src={img} id="ImageSport" alt="Patient Image" /></div>;
}

export default ImagePatient

