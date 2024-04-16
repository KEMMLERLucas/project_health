import "./SuiviPatient.css";
import { FaFlag } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";
import { FaPersonRunning } from "react-icons/fa6";
import { FaFish } from "react-icons/fa6";
import { GrBike } from "react-icons/gr";
import { FaFireAlt } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";

function Badge({ intitule, icon, desc}){
    let idName = "";
    let iconColor = "";
    let intituleColor = "";
    let flag = false;
    let rabbit = false;
    let running = false;
    let plane = false;
    let rocket = false;
    let fish = false;
    let bike = false;
    let fire = false;
    let wind = false;

    switch(icon){
        case "1":
            flag = true;
            idName = "badgeRose";
            iconColor = "iconRose";
            intituleColor = "intituleRose";
            break;
        case "2":
            rabbit = true;
            idName = "badgeOrange";
            iconColor = "iconOrange";
            intituleColor = "intituleOrange";
            break;
        case "3":
            running = true;
            break;
        case "4":
            plane = true;
            idName = "badgeBleu";
            iconColor = "iconBleu";
            intituleColor = "intituleBleu";
            break;
        case "5":
            rocket = true;
            break;
        case "6":
            fish = true;
            idName = "badgeBleu";
            iconColor = "iconBleu";
            intituleColor = "intituleBleu";
            break;
        case "7":
            bike = true;
            idName = "badgeJaune";
            iconColor = "iconJaune";
            intituleColor = "intituleJaune";
            break;
        case "8": 
            fire = true;
            idName = "badgeOrange";
            iconColor = "iconOrange";
            intituleColor = "intituleOrange";
            break;
        default: 
            wind = true;
            idName = "badgeBleu";
            iconColor = "iconBleu";
            intituleColor = "intituleBleu";
            break;
    }

    return( <div className="containerBadge">
            <div className="badge" id={idName}>
                {flag && <FaFlag className="iconBadge" id={iconColor}/>}
                {rabbit && <GiRabbit className="iconBadge" id={iconColor}/>}
                {running && <FaPersonRunning className="iconBadge" id={iconColor}/>}
                {fish && <FaFish className="iconBadge" id={iconColor}/>}
                {bike && <GrBike className="iconBadge" id={iconColor}/>}
                {fire && <FaFireAlt className="iconBadge" id={iconColor}/>}
                {wind && <FaWind className="iconBadge" id={iconColor}/>}
            </div>
            <div>
            <div className="nomBadge" id={intituleColor}>{intitule}</div>
            <div className="descBadge">{desc}</div>
            </div>
        </div>
    )
}

export default Badge