import axios from "axios"
import './App.css'
import {useEffect, useState} from "react";
import PatientPreview from "./components/PatientPreview.jsx";
import Banner from "./components/Banner.jsx";


function App() {
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
                console.log(patient)
                let sex = patient.sex
                let eof
                let i = 0

                if (sex === 1) {
                    let num = Math.floor(Math.random() * (3 - 0) + 0)
                    eof = `_homme${num}`
                } else {
                    let num = Math.floor(Math.random() * (3 - 0) + 0)
                    eof = `_femme${num}`
                }
                console.log(eof)
                json[patient.id]=`/image_sport${eof}.jpg`
            });
            console.log("Hey")
            console.log(json)
            localStorage.setItem("patients", JSON.stringify(json))
            let pat = JSON.parse(localStorage.getItem("patients"))
            console.log(pat)
        }
        if (JSON.parse(localStorage.getItem("patients"))==null || localStorage.length===1){
            savePatientImagesInLocalStorage()
        }
    }, [patients]);

    return (
        <div className="App">
            {isLoading && <p>Chargement....</p>}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            {isError && <p> Une erreur s'est produite</p>}
            <Banner/>
            <p id="title">Mes patients</p>
            <div className="patients">
                {patients.map((patient) => (
                    < PatientPreview key={patient.id} patient={patient}/>))
                }
            </div>
        </div>
    )
}

export default App;