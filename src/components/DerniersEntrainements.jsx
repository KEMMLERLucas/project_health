import "./SuiviPatient.css";
import ChampEntrainement from "./ChampEntrainement.jsx";


function DerniersEntrainements ({ patient }) {
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
                <ChampEntrainement name="Cyclisme" duration="54 minutes" calories="573 calories"/>
                <ChampEntrainement name="Cyclisme" duration="54 minutes" calories="573 calories"/>
                <ChampEntrainement name="Cyclisme" duration="54 minutes" calories="573 calories"/>
                <ChampEntrainement name="Cyclisme" duration="54 minutes" calories="573 calories"/>
            </div>
        </div>
    );
}

export default DerniersEntrainements;