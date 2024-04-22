import "./css/SuiviPatient.css";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom"
import Cookies from 'js-cookie'
/*import { withRouter } from "react-router-dom";*/
import swal from 'sweetalert2';
import './css/sweetalert.css'

function Title({name, patientId, flecheOn = true, infoOn = true, signoutOn = false}) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back in history
    };

    const onSubmit = (data) => {
        // Vérifier la longueur du mot de passe
        swal.fire({
            title: "Êtes-vous sûrs de vouloir vous déconnecter ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Annuler",
            confirmButtonText: "Confirmer",
          }).then((result)=>{
            if (result.isConfirmed) {
                Cookies.remove('data')
                navigate("/")
            }
        })
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
                <FaSignOutAlt className="icone" id="signOut" onClick={onSubmit}/>
                </span>
            )}

        </div>)
}

export default Title