import "./SuiviPatient.css";
import { FaCaretLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";

function Title({name}){

    return (<div className="title"><FaCaretLeft className="icone" id="fleche"/><span>{name}</span><FaCog
    className="icone" id="rouage"/></div>)
}

export default Title