import "./SuiviPatient.css";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineSports } from "react-icons/md";
import React from "react";

function ChampEntrainement({ name, duration, calories, date, level, train = false, onClick }) {

    let idActivity = "";
    let activityName = "";
    let classChamp = "ChampEntrainement";

    switch(name){
        case "bike": 
            idActivity = "Bike";
            activityName = "Cyclisme";
            break;
        case "swimming":
            idActivity = "Swimming";
            activityName = "Natation";
            break;
        case "footing":
            idActivity = "Footing";
            activityName = "Course à pied";
            break;
        case "walking":
            idActivity = "Walking";
            activityName = "Marche";
            break;
        case "Séance bras":
            idActivity = "Arm";
            activityName = name;
            break;
        case "Séance fesses":
            idActivity = "Ass";
            activityName = name;
            break;
        case "Breakfast":
            idActivity = "Breakfast";
            activityName = name;
            break;
        case "Snack":
            idActivity = "Breakfast";
            activityName = name;
            break;
        case "Lunch":
            idActivity = "Breakfast";
            activityName = name;
            break;
        case "Dinner":
            idActivity = "Breakfast";
            activityName = name;
            break;    
    }

    function getDate(){
        let activityDate = new Date(date);
        let day = activityDate.getDate();
        let month = activityDate.getMonth()+1; /* Car ici le premier mois de l'année est 0 */
        let year = activityDate.getFullYear();
        let today = new Date();

        if(day<10){
            day = "0"+day;
        }

        if(month<today.getMonth()+1 || (month === today.getMonth()+1 && day < today.getDate())){
            year++;
        }

        if(month<10){
            month = "0"+month;
        }

        return(day+"/"+month+"/"+year);
    }

    if(train){
        classChamp += "Train";
    }

    return (
        <div className={classChamp} id={idActivity} onClick={onClick}>

            <div className="all">
            <div className="activityName">{activityName}</div>
            {!train && 
                <div className="date">{getDate(date)}</div>
            }
            
            {train &&
                <div className="level">{level}</div>
            }

            </div>

            <div className="activityDurationCalories">
                <span className="activityDuration">
                    <MdOutlineTimer className="icone" id="duration"/>
                    <div className="duration">{duration}</div>
                </span>
                <div className="activityCalories">
                    { !train &&
                        <AiOutlineFire className="icone" id="calories"/>
                    }
                    { train &&
                        <MdOutlineSports className="icone" id="calories"/>
                    }
                    <div className="calories">{calories}</div>
                </div>
            </div>
        </div>
    );
}

export default ChampEntrainement;