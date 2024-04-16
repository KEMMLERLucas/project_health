import axios from "axios"
import './App.css'
import {useEffect, useState} from "react";
import PatientPreview from "./components/PatientPreview.jsx";
import Banner from "./components/Banner.jsx";


function App() {
  const [isLoading,setLoading] =useState(false)
  const[isError,setError] =useState(false)
  const [patients, setPatients] = useState([])
  useEffect(() => {
    async function loadPatient(){
      const api="https://health.shrp.dev/items/people"
      try{
        setLoading(true)
        setError(false)
        const response = await axios.get(api)
        const data  = await response.data.data

        setLoading(false)
        setError(false)

        setPatients(data);
      }catch (error){
        console.error(error)
        setLoading(false)
        setError(true)
      }
    }
    loadPatient()
  }, []);

  return (
      <div className="App">
        {isLoading && <p>Chargement....</p>}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        {isError && <p> Une erreur s'est produite</p>}
        <Banner/>
        <p id="title">Mes patients</p>
        <div className="patients">
        {patients.map((patient)=> (
            < PatientPreview key={patient.id} patient={patient}/> ))
        }
        </div>
      </div>
  )
}

export default App;