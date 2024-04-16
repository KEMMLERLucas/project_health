import "./SuiviPatient.css";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import React from "react";

function ChampEntrainement({ name, duration, calories, date }) {

    let idActivity = "";
    let activityName = "";

    switch(name){
        case "bike": 
            idActivity = "Bike";
            activityName = "Cyclisme";
            break;
        case "swimming":
            idActivity = "Swimming"
            activityName = "Natation";
            break;
        case "footing":
            idActivity = "Footing"
            activityName = "Course à pied";
            break;
        case "walking":
            idActivity = "Walking"
            activityName = "Marche";
            break;
    }

    function getDate(){
        let activityDate = new Date(date);
        let day = activityDate.getDay();
        let month = activityDate.getMonth();

        if(day<10){
            day = "0"+day;
        }

        if(month<10){
            month = "0"+month;
        }

        return(day+"/"+month+"/"+activityDate.getFullYear());
    }

    return (
        <div className="ChampEntrainement" id={idActivity}>

            <div className="activityNameAndDate">
                <div className="activityName">{activityName}</div>
                <div className="activityDate">{getDate()}</div>
            </div>

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