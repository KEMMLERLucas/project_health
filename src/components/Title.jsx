import "./SuiviPatient.css";
import { FaCaretLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
/*import { withRouter } from "react-router-dom";*/

function Title({name, history}){
    
    const handleGoBack = () => {
        history.goBack();
    };

    return (
    <div className="title">
        <FaCaretLeft className="icone" id="fleche" onClick={handleGoBack}/>
        <span>{name}</span>
        <Link to="/info">
            <FaCog className="icone" id="rouage"/>
        </Link>
    </div>)
}

export default Title