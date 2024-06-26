import axios from "axios"
import {useEffect, useState} from "react";
import Banner from "./Banner.jsx";
import PatientPreview from "./PatientPreview.jsx";
import React from 'react';
import TokenContext from '../context/TokenContext.jsx';
import ContextPatient from "../context/TokenContext.jsx";



function Patients({token}) {
    const [isLoading, setLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [patients, setPatients] = useState([])

    useEffect(() => {
        async function loadPatient() {
            const api = "https://health.shrp.dev/items/people"
            try {
                setLoading(true)
                setError(false)
                const response = await axios.get(api)
                const data = await response.data.data

                setLoading(false)
                setError(false)

                setPatients(data);
            } catch (error) {
                console.error(error)
                setLoading(false)
                setError(true)
            }
        }

        loadPatient()
    }, []);
    useEffect(() => {
        function savePatientImagesInLocalStorage() {
            let json = {};
            patients.map((patient) => {
                let sex = patient.sex
                let eof
                let i = 0

                if (sex === 1) {
                    let num = Math.floor(Math.random() * (3))
                    eof = `_homme${num}`
                } else {
                    let num = Math.floor(Math.random() * (3))
                    eof = `_femme${num}`
                }
                json[patient.id] = `/image_sport${eof}.jpg`
            });
            localStorage.setItem("patients", JSON.stringify(json))
            let pat = JSON.parse(localStorage.getItem("patients"))
        }

        if (JSON.parse(localStorage.getItem("patients")) == null || Object.keys(JSON.parse(localStorage.getItem("patients"))).length === 0) {
            savePatientImagesInLocalStorage()
        }

    }, [patients]);

    return (
        <TokenContext.Provider value={{tok : token,pats : patients}}>
                <div>
                    {isLoading && <p>Chargement....</p>}
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    {isError && <p> Une erreur s'est produite</p>}
                    <Banner/>
                    <div className="Patients">
                    <p className="name" id="padding">Mes patients</p>
                    <div className="patients">
                        {patients.map((patient) => (
                            < PatientPreview key={patient.id} patient={patient}/>))
                        }
                    </div>
                    </div>
                </div>
        </TokenContext.Provider>
    )
}

export default Patients;