import "./SuiviPatient.css";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import React from "react";

function ChampEntrainement({ name, duration, calories }) {
    function clicked() {
        console.log("Cliqué : " + name + " activité clicked" + "; duration : " + duration + "; calos : "+ calories);
    }

    function getName(){
        switch(name){
            case "bike": 
                return "Cyclisme";
            case "swimming":
                return "Natation";
            case "footing": 
                return "Course à pied";
            case "walking":
                return "Marche";
        }
    }

    return (
        <div className="ChampEntrainement" onClick={clicked}>

            <div className="activityName">{getName()}</div>

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