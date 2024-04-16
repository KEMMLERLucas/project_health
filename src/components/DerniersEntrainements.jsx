import "./SuiviPatient.css";
import ChampEntrainement from "./ChampEntrainement.jsx";
import axios from "axios"
import {useEffect, useState} from "react";



function DerniersEntrainements ({ patient }) {

    const[activities, setActivities] = useState([])

    useEffect(() => {
        async function loadActivities(){
        const api=`https://health.shrp.dev/items/physicalActivities?filter[people_id][_eq]=${patient.id}`
        try{

            const response = await axios.get(api)
            const data  = await response.data.data
    
            setActivities(data);
        }catch (error){
            console.error(error)

        }
        }
        loadActivities()
    }, [patient]);

    function getDate(activity){
        let today = dateWeek(new Date());
        let activityDate;
        let lastWeek = false;

        activityDate = dateWeek(new Date(activity.date));
        if(activityDate === today){
            lastWeek = true;
        }
        return(lastWeek);
    }

    function dateWeek(a) {
        var d = a ? new Date(a) : new Date();
        d.setHours(0,0,0,0);
        d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
        var w = new Date(d.getFullYear(), 0, 4);
        return ('0' + (1 + Math.round(((d.getTime() - w.getTime()) / 86400000 - 3 + (w.getDay() + 6) % 7) / 7))).slice(-2);
    }

    /*
    * name, duration and calories should be changed
    * string here to give an example just
    * */

    return (
        <div>
            <div className="title" id="titleEntrainement">Vos activités de la semaine : </div>
            <div className="DerniersEntrainements">
                {activities.map((activity)=> (
                    getDate(activity) && <ChampEntrainement key={activity.id} name={activity.type} duration={activity.duration+" minutes"} calories={activity.consumedCalories+" calories"}/>))
                }
            </div>
            <div className="title" id="titleEntrainement">Vos activités plus anciennes : </div>
            <div className="DerniersEntrainements">
                {activities.map((activity)=> (
                    !getDate(activity) && <ChampEntrainement key={activity.id} name={activity.type} duration={activity.duration+" minutes"} calories={activity.consumedCalories+" calories"}/>))
                }
            </div>
        </div>
    );
}

export default DerniersEntrainements;