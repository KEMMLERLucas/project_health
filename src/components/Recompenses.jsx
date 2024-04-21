import "./SuiviPatient.css";
import Badge from "./Badge.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import { act } from "react-dom/test-utils";

function Recompenses({patient}){

    const[activities, setActivities] = useState([])

    useEffect(() => {
        async function loadActivities(){
        const api="https://health.shrp.dev/items/physicalActivities?filter[people_id][_eq]="+patient.id;
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

    let lotOfSport = false;
    let firstSwim = false; 
    let firstBike = false;
    let sportThisWeek = false;
    let firstFooting = false;
    let firstWalk = false;
    let today = dateWeek(new Date());
    let activityDate;

    for(let i=0; i<activities.length;i++){
        activityDate = dateWeek(new Date(activities[i].date));
        if(activities[i].type === "bike"){
            firstBike = true;
        }
        if(activities[i].type === "walking"){
            firstWalk = true;
        }
        if(activities[i].type === "footing"){
            firstFooting = true;
        }
        if(activities[i].type === "swimming"){
            firstSwim = true;
        }
        if(today === activityDate){
            sportThisWeek = true;
        }
        if(activities[i].duration >= 60 && activityDate === today){
            lotOfSport = true;
        }
        /*console.log(today);*/
        /*console.log(new Date());*/
    }

    function dateWeek(a) {
        var d = a ? new Date(a) : new Date();
        d.setHours(0,0,0,0);
        d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
        var w = new Date(d.getFullYear(), 0, 4);
        return ('0' + (1 + Math.round(((d.getTime() - w.getTime()) / 86400000 - 3 + (w.getDay() + 6) % 7) / 7))).slice(-2);
    }


    return(<div className="totalRecompenses">
        <div className="name" id="pad">Badges récupérés</div>
        <div className="recompense">
            <Badge intitule="Case départ" icon="1" desc="Inscription validée"/>
            <Badge intitule="Forrest Gump" icon="3" desc="Au moins 10 000 pas en une journée."/>
        </div>
        <div className="recompense">
            {firstFooting && <Badge intitule="Usain Bolt" icon="3" desc="Première activité “course à pied” enregistrée."/>}
            {firstSwim && <Badge intitule="Un poisson dans l’eau" icon="6" desc="Première activité “natation” enregistrée."/>}
        </div>
        <div className="recompense">
            {firstBike && <Badge intitule="Bientôt le maillot jaune" icon="7" desc="Première activité “vélo” enregistrée."/>}
            {sportThisWeek && <Badge intitule="On fire" icon="8" desc="Faire au moins une séance de sport cette semaine."/>}
        </div>
        <div className="recompense">
            {lotOfSport && <Badge intitule="Plus rapide que la tortue" icon="2" desc="Au moins 1 heure de sport en une journée."/>}
            {firstWalk && <Badge intitule="Le vent dans les cheveux" icon="9" desc="Première activité “marche” enregistrée."/>}
        </div>
        </div>
    )
}

export default Recompenses