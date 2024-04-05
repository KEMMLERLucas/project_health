import "./SuiviPatient.css";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import React from "react";

function ChampEntrainement({ name, duration, calories }) {
    function clicked() {
        console.log("Cliqué : " + name + " activité clicked" + "; duration : " + duration + "; calos : "+ calories);
    }

    let classNameEntrainement = "ChampEntrainement";
    let activityName = "";

    switch(name){
        case "bike": 
            classNameEntrainement += "Bike";
            console.log(classNameEntrainement)
            activityName = "Cyclisme";
            break;
        case "swimming":
            classNameEntrainement += "Swimming"
            activityName = "Natation";
            break;
        case "footing":
            classNameEntrainement += "Footing"
            activityName = "Course à pied";
            break;
        case "walking":
            classNameEntrainement += "Walking"
            activityName = "Marche";
            break;
    }

    return (
        <div className={classNameEntrainement} onClick={clicked}>

            <div className="activityName">{activityName}</div>

            <div className="activityDurationCalories">
                <div className="activityDuration">
                    <MdOutlineTimer className="icone" id="duration"/>
                    <div className="duration">{duration}</div>
                </div>
                <div className="activityCalories">
                    <AiOutlineFire className="icone" id="calories"/>
                    <div className="calories">{calories}</div>
                </div>
            </div>

        </div>
    );
}

export default ChampEntrainement;