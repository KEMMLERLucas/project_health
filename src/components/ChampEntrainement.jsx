import "./SuiviPatient.css";
import {FaCog} from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import React from "react";

function ChampEntrainement({ name, duration, calories }) {
    function clicked() {
        console.log("Cliqué : " + name + " activité clicked" + "; duration : " + duration + "; calos : "+ calories);
    }

    return (
        <div className="ChampEntrainement" onClick={clicked}>

            <div className="activityName">{name}</div>

            <div className="activityDurationCalories">
                <div className="activityDuration">
                    <FaCog className="icone" id="duration"/>
                    <div className="duration">{duration}</div>
                </div>
                <div className="activityCalories">
                    <FaCog className="icone" id="calories"/>
                    <div className="calories">{calories}</div>
                </div>
            </div>

        </div>
    );
}

export default ChampEntrainement;