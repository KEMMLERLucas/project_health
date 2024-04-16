import "./SuiviPatient.css";
import { FaCaretLeft } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
/*import { withRouter } from "react-router-dom";*/
import { MdOutlineExitToApp } from "react-icons/md";
import swal from 'sweetalert2';
import './sweetalert.css';

function Title({name, history}){
    
    const handleGoBack = () => {
        history.goBack();
    };

    function showAlert(){
        swal.fire({
            title: "Êtes-vous sûrs de vouloir vous déconnecter ?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Annuler",
            confirmButtonText: "Confirmer",
          });
        }

    switch(name){
        case "Suivi du patient":
            return (
                <div className="title">
                    <FaCaretLeft className="icone" id="fleche" onClick={handleGoBack}/>
                    <span>{name}</span>
                    <Link to="/info">
                        <FaCog className="icone" id="rouage"/>
                    </Link>
                </div>)
            break;
        
        case "Mon profil":
            return (
                <div className="title">
                    <FaCaretLeft className="icone" id="fleche" onClick={handleGoBack}/>
                    <span>{name}</span>
                    <MdOutlineExitToApp className="icone" id="exit" onClick={showAlert}/>
                </div>)
            break;
    }
}

export default Title