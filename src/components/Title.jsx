import "./SuiviPatient.css";
import { FaArrowLeft, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
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
                <span className="border">
                <IoMdArrowBack className="icone" id="fleche" onClick={handleGoBack}/>
                </span>
            )}
            <span>{name}</span>
            {infoOn && (
                <Link to={`/patients/${patientId}/info/${patientId}`}>
                        <span className="border"><FaCog className="icone" id="rouage"/></span>
                </Link>
            )}
            {signoutOn && (
                <span className="border">
                <FaSignOutAlt className="icone" id="signOut" onClick={handleSignOut}/>
                </span>
            )}

        </div>)
}

export default Title