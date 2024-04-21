import "./css/SuiviPatient.css";
import ChampEntrainement from "./ChampEntrainement.jsx";
import axios from "axios"
import {useEffect, useState} from "react";


function DerniersEntrainements ({ patient, latestActivityOnly}) {
    /** Ces trois variables permettent d'afficher des messages si aucune activité n'a été réalisée */
    let activityThisWeek = false; /** Vrai si il y a eu au moins une activité cette semaine, faux sinon */
    let activityLastYear = false; /** Vrai si il y a eu au moins une activité l'année dernière, faux sinon */
    let activityThisYear = false; /** Vrai si il y a eu au moins une activité cette année (avant la semaine courante), faux sinon */

    const[activities, setActivities] = useState([])
    const [activeTab, setActiveTab] = useState(false);

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

    /** Renvoie vrai si l'activité a été réalisée dans la semaine, faux sinon */
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

    /** Renvoie vrai si l'activité a été réalisée l'année dernière, faux sinon */
    function getLastYear(activity){
        let activityDate = new Date(activity.date);
        let today = new Date();

        if(activityDate.getMonth() < today.getMonth() || ( activityDate.getMonth() === today.getMonth() && activityDate.getDate() < today.getDate())){
            activityDate.setFullYear(activityDate.getFullYear()+1);
        }

        if(activityDate.getFullYear() != today.getFullYear()){
            activityLastYear = true;
            return true;
        }
        return false;
    }

    /** Renvoie vrai si l'activité a été réalisée cette année, mais pas cette semaine (donc avant), faux si elle a été réalisée 
     * cette semaine ou l'année dernière 
     */
    function getThisYear(activity){
        activityThisYear = true;
        return !getDate(activity) && !getLastYear(activity);
    }

    /** Permet de savoir si une date donnée est dans la semaine courante */
    function dateWeek(a) {
        var d = a ? new Date(a) : new Date();
        d.setHours(0,0,0,0);
        d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
        var w = new Date(d.getFullYear(), 0, 4);
        return ('0' + (1 + Math.round(((d.getTime() - w.getTime()) / 86400000 - 3 + (w.getDay() + 6) % 7) / 7))).slice(-2);
    }

    const first = activities.find(activity => getDate(activity));

    return ( 
        <div>

            <div id="pad" className="name">Activités de la semaine</div>
            <div className="DerniersEntrainements">

                {activities.map((activity)=> (
                    getDate(activity) && <ChampEntrainement key={activity.id} name={activity.type} duration={activity.duration+" minutes"} calories={activity.consumedCalories+" calories"} date={activity.date}/>))
                }
                {
                    !activityThisWeek && <div className="noActivity">Pas d'activité enregistrée cette semaine...</div>
                }
            </div>
            <div className="name" id="pad">Activités plus anciennes</div>
            <div className="DerniersEntrainements">
    {activities
        .filter(activity => getThisYear(activity)) // Filtrer les activités de cette année
        .sort((a, b) => new Date(b.date) - new Date(a.date)) // Trier les activités par date décroissante
        .map(activity => (
            <ChampEntrainement
                key={activity.id}
                name={activity.type}
                duration={activity.duration + " minutes"}
                calories={activity.consumedCalories + " calories"}
                date={activity.date}
            />
        ))}
    {!activityThisYear && <div className="noActivity">Pas d'activité plus ancienne enregistrée...</div>}
</div>

            <div className="titleLastYear" id="titleEntrainement" onClick={() => setActiveTab(!activeTab)}>{activeTab ? "Voir moins" : "Voir plus"}</div>
            {activeTab && <div className="DerniersEntrainements">
                {activities.sort((a, b) => new Date(b.date) - new Date(a.date)).map((activity)=> (
                    getLastYear(activity) && <ChampEntrainement key={activity.id} name={activity.type} duration={activity.duration+" minutes"} calories={activity.consumedCalories+" calories"} date={activity.date}/>))
                }
                {
                    !activityLastYear && <div className="noActivity">Pas d'activité enregistrée l'année dernière...</div>
                }
            </div>}
        </div>
    );
}

export default DerniersEntrainements;