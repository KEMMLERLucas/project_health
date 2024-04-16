import axios from "axios"
import './App.css'
import {useEffect, useState} from "react";
import SuiviPatient from "./components/SuiviPatient.jsx";

function App() {
  const [isLoading,setLoading] =useState(false)
  const[isError,setError] =useState(false)
  const [patients, setPatients] = useState([])
  useEffect(() => {
    async function loadPatient(){
      const api="https://health.shrp.dev/items/people/00657896-d299-48a7-8a41-aae1c2b4f606"
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
        < SuiviPatient key={patients.id} patient={patients}/>
      </div>
  )
}

export default App;