import "./SuiviPatient.css";
import ChampEntrainement from "./ChampEntrainement.jsx";
import axios from "axios"
import {useEffect, useState} from "react";


function DerniersEntrainements ({ patient }) {
    let activityThisWeek = false;

    const[activities, setActivities] = useState([])

    useEffect(() => {
        async function loadActivities() {

            const api = `https://health.shrp.dev/items/physicalActivities?filter[people_id][_eq]=${patient.id}`;
            try {
                const response = await axios.get(api);
                const data = response.data.data;
                setActivities(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadActivities();
    }, [patient]);

    activities.sort(function(a,b){
        return new Date(b.date) > new Date(a.date);
      });

    function getDate(activity){
        let today = new Date();
        let activityDate = new Date(activity.date);
        let lastWeek = false;

        if(activityDate.getMonth() < today.getMonth() || ( activityDate.getMonth() === today.getMonth() && activityDate.getDate() < today.getDate())){
            activityDate.setFullYear(activityDate.getFullYear()+1);
        }

        let thisWeek = dateWeek(today)
        let activityWeek = dateWeek(activityDate);

        if((thisWeek === activityWeek && activityDate.getDate() < today.getDate()) ){
            lastWeek = true;
            activityThisWeek = true;
        }

        return(lastWeek);
    }

    function getLastYear(activity){
        let activityDate = new Date(activity.date);
        let today = new Date();

        if(activityDate.getMonth() < today.getMonth() || ( activityDate.getMonth() === today.getMonth() && activityDate.getDate() < today.getDate())){
            activityDate.setFullYear(activityDate.getFullYear()+1);
        }

        if(activityDate.getFullYear() != today.getFullYear()){
            return true;
        }
        return false;
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
                    getDate(activity) && <ChampEntrainement key={activity.id} name={activity.type} duration={activity.duration+" minutes"} calories={activity.consumedCalories+" calories"} date={activity.date}/>))
                }
                {
                    !activityThisWeek && <div className="noActivity">Pas d'activité enregistrée cette semaine...</div>
                }
            </div>
            <div className="title" id="titleEntrainement">Vos activités plus anciennes : </div>
            <div className="DerniersEntrainements">
                {activities.map((activity)=> (
                    !getDate(activity) && !getLastYear(activity) && <ChampEntrainement key={activity.id} name={activity.type} duration={activity.duration+" minutes"} calories={activity.consumedCalories+" calories"} date={activity.date}/>))
                }
            </div>
            <div className="title" id="titleEntrainement">L'année dernière : </div>
            <div className="DerniersEntrainements">
                {activities.map((activity)=> (
                    !getDate(activity) && getLastYear(activity) && <ChampEntrainement key={activity.id} name={activity.type} duration={activity.duration+" minutes"} calories={activity.consumedCalories+" calories"} date={activity.date}/>))
                }
            </div>
        </div>
    );
}

export default DerniersEntrainements;