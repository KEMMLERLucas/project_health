import "./SuiviPatient.css";
import ChampEntrainement from "./ChampEntrainement.jsx";


function DerniersEntrainements ({ patient, activities }) {
    var listActivities = patient.physicalActivities
    function clicked() {
        console.log("Cliqué : " + patient.firstname + " ; activité clicked");
    }

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