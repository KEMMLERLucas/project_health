import "./SuiviPatient.css";
import ChampEntrainement from "./ChampEntrainement.jsx";
import axios from "axios"
import {useEffect, useState} from "react";



function DerniersEntrainements ({ patient }) {
    var listActivities = patient.physicalActivities
    function clicked() {
        console.log("Cliqué : " + patient.firstname + " ; activité clicked");
    }

    const[activities, setActivities] = useState([])

    useEffect(() => {
        async function loadActivities(){
        const api="https://health.shrp.dev/items/physicalActivities?filter[people_id][_eq]="+patient.id
        try{

            const response = await axios.get(api)
            const data  = await response.data.data
    
            setActivities(data);
        }catch (error){
            console.error(error)

        }
        }
        loadActivities()
    }, []);

    /*
    * name, duration and calories should be changed
    * string here to give an example just
    * */

    return (
        <div>
            <div className="title" id="titleEntrainement"> Ses derniers entraînements</div>
            <div className="DerniersEntrainements" onClick={clicked}>
                {activities.map((activity)=> (
                    listActivities.includes(activity.id) && <ChampEntrainement key={activity.id} name={activity.type} duration={activity.duration+" minutes"} calories={activity.consumedCalories+" calories"}/>))
                }
            </div>
        </div>
    );
}

export default DerniersEntrainements;