import axios from "axios"
import './App.css'
import {useEffect, useState} from "react";
import SuiviPatient from "./components/SuiviPatient.jsx";
import PatientList from "./components/PatientList.jsx";
import PatientPreview from "./components/PatientPreview.jsx";

function App() {
  const [isLoading,setLoading] =useState(false)
  const[isError,setError] =useState(false)
  const [patients, setPatients] = useState([])
  const [activities, setActivities] = useState([])
  

  useEffect(() => {
    async function loadPatient(){
      const api="https://health.shrp.dev/items/people"
      try{
        /*TEST*/
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

  useEffect(() => {
    async function loadActivities(){
    const api="https://health.shrp.dev/items/physicalActivities"
    try{
        /*TEST*/
        setLoading(true)
        setError(false)
        const response = await axios.get(api)
        const data  = await response.data.data

        setLoading(false)
        setError(false)

        setActivities(data);
    }catch (error){
        console.error(error)
        setLoading(false)
        setError(true)
    }
    }
    loadActivities()
}, []);


  return (
      <div className="App">
        {isLoading && <p>Chargement....</p>}
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        {isError && <p> Une erreur s'est produite</p>}
        {patients.map((patient)=> (
            < PatientPreview key={patient.id} patient={patient}/> ))
        }
      </div>
  )
}

export default App;
