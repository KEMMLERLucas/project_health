import "./SuiviPatient.css";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineSports } from "react-icons/md";
import React from "react";

function ChampEntrainement({ name, duration, calories, train = false, onClick }) {

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
    }

    const color = () => {
        console.log("Cliqué : " + name);
        if (onClick) onClick();
    };

    if(train){
        classChamp += "Train";
    }

    return (
        <div className={classChamp} id={idActivity} onClick={color}>

            <div className="activityName">{activityName}</div>

            <div className="activityDurationCalories">
                <div className="activityDuration">
                    <MdOutlineTimer className="icone" id="duration"/>
                    <div className="duration">{duration}</div>
                </div>
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