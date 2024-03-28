import "./SuiviPatient.css";
import { FaCaretLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import ImagePatient from "./ImagePatient";
import PatientName from "./PatientName";


function SuiviPatient({patient}){
    console.log(patient)
    return (<div className="title"><FaCaretLeft className="icone" id="fleche"/><span>Suivi du patient</span><FaCog className="icone" id="rouage"/>
    <ImagePatient/>
    <PatientName patient={patient}/>
    </div>)
    
}

export default SuiviPatient