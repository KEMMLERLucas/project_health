import "./SuiviPatient.css";
import { FaCaretLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

function Title({name}){

    return (
    <div className="title">
        <Link to="/">
            <FaCaretLeft className="icone" id="fleche"/>
        </Link>
        <span>{name}</span>
        <Link to="/info">
            <FaCog className="icone" id="rouage"/>
        </Link>
    </div>)
}

export default Title