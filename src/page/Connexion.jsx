import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import swal from 'sweetalert2'
import axios from "axios";
import '../components/css/sweetalert.css';
import "../components/css/auth.css";

function Connexion({onLogin}) {
    /*Constantes pour la classe connexion
    * */
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const navigate = useNavigate()
    const customClass = {
        title: 'custom-title',
        header: 'custom-header',
        confirmButton: 'custom-confirmButton',
    };

    async function login(values) {
        const api = "https://health.shrp.dev/auth/login";
        try {
            setLoading(true);
            setError(false);
            const response = await axios.post(api, values);
            const data = await response.data.data;
            let expires = new Date();
            setLoading(false);
            setError(false);
            onLogin({data})
        } catch (error) {
            //console.error(error);
            await swal.fire({
                title: 'Nom d\'utilisateur ou mot de passe incorrect!',
                icon: 'error',
                confirmButtonText: 'Réessayer',
                customClass: customClass
            })
            setLoading(false);
            setError(true);
        }
    }

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        // Vérifier la longueur du mot de passe
        if (data.password.length < 8) {
            swal.fire({
                title: 'La longueur du mot de passe doit-être supérieur à 8 caractères !',
                icon: 'error',
                confirmButtonText: 'Modifier',
                customClass: customClass
            })
        } else {
            login(data);
        }
    };

    return (
            <div className="full_page_co_container">
                <div className="formulaire">
                    <h2 id="sous_titre">Connexion</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="champ">
                            <label htmlFor="email">Adresse e-mail</label>
                            <input
                                type="text"
                                id="email"
                                placeholder="Saisir votre adresse e-mail"
                                {...register("email", {required: true, maxLength: 90})}
                            />
                        </div>
                        <div className="champ">
                            <label htmlFor="mdp" id="mdp">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="mdp"
                                placeholder="Saisir votre mot de passe"
                                {...register("password", {required: true})}
                            />
                        </div>

                        <p id="forget_mdp">Mot de passe oublié ?</p>

        <span className="end_formulaire">
                        <span className="button_connexion">
            <button className="primary_button">Se connecter</button>
          </span>
                        <p>
                            Pas de compte ?{" "}
                            <Link id="register" to="/inscription">
                                Je m'inscris !
                            </Link>
                        </p>
                        </span>
                    </form>
                </div>
            </div>

    );
}

export default Connexion;