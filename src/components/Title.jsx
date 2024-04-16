import "./SuiviPatient.css";
import { FaCaretLeft, FaCog, FaSignOutAlt } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
/*import { withRouter } from "react-router-dom";*/

function Title({name, patientId, flecheOn = true, infoOn = true, signoutOn = false}) {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back in history
    };

    const handleSignOut = () => {
        console.log("Signing out...");
        navigate('/');
    };

    return (
        <div className="title">
            {flecheOn && (
                <FaCaretLeft className="icone" id="fleche" onClick={handleGoBack}/>
            )}
            <span>{name}</span>
            {infoOn && (
                <Link to={`/info/${patientId}`}>
                    <FaCog className="icone" id="rouage"/>
                </Link>
            )}
            {signoutOn && (
                <FaSignOutAlt className="icone" id="signOut" onClick={handleSignOut}/>
            )}

        </div>)
}

export default Title