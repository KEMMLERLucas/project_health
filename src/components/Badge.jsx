import "./SuiviPatient.css";
import { FaFlag } from "react-icons/fa";
import { GiRabbit } from "react-icons/gi";
import { FaPersonRunning } from "react-icons/fa6";
import { FaFish } from "react-icons/fa6";
import { GrBike } from "react-icons/gr";
import { FaFireAlt } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";

function Badge({ intitule, icon, desc}){
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
            break;
        case "2":
            rabbit = true;
            break;
        case "3":
            running = true;
            break;
        case "4":
            plane = true;
            break;
        case "5":
            rocket = true;
            break;
        case "6":
            fish = true;
            break;
        case "7":
            bike = true;
            break;
        case "8": 
            fire = true;
            break;
        default: 
            wind = true;
            break;
    }

    return( <div className="containerBadge">
            <div className="badge">
                {flag && <FaFlag className="iconBadge"/>}
                {rabbit && <GiRabbit className="iconBadge"/>}
                {running && <FaPersonRunning className="iconBadge"/>}
                {fish && <FaFish className="iconBadge"/>}
                {bike && <GrBike className="iconBadge"/>}
                {fire && <FaFireAlt className="iconBadge"/>}
                {wind && <FaWind className="iconBadge"/>}
            </div>
            <div>
            <div className="nomBadge">{intitule}</div>
            <div className="descBadge">{desc}</div>
            </div>
        </div>
    )
}

export default Badge