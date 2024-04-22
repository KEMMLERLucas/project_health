import "./css/nutrition.css";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/md";
import { MdOutlineSports } from "react-icons/md";
import React from "react";

function ChampNutrition({ name }) {

    let idActivity = "";
    let activityName = "";

    switch(name){
        case "Breakfast":
            idActivity = "Breakfast";
            activityName = "Petit-déjeuner";
            break;
        case "Snack":
            idActivity = "Breakfast";
            activityName = "Encas";
            break;
        case "Lunch":
            idActivity = "Breakfast";
            activityName = "Déjeuner";
            break;
        case "Dinner":
            idActivity = "Breakfast";
            activityName = "Dîner";
            break;    
    }

    return (
        <div id={idActivity}>
            <div className="name">{activityName}</div>
        </div>
    );
}

export default ChampNutrition;