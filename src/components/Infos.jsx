import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import swal from 'sweetalert2';
import axios from "axios";
import './sweetalert.css'
import Onglets from "./Onglets";
import Title from "./Title";
import "./auth.css";
import Swal from "sweetalert2";

function Infos() {
    /*Constantes pour la classe connexion
    * */
    const [activeTab, setActiveTab] = useState("Informations");
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
    const navigate=useNavigate()
    const customClass = {
        title:'custom-title',
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
                console.log(data);
            expires.setTime(expires.getTime() + data.expires * 10000);
            setLoading(false);
            setError(false);
            setCookie("access_token", data.access_token, { path: "/", expires });
            setCookie("refresh_token", data.refresh_token, { path: "/", expires });
            navigate("/patients");
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

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // Vérifier la longueur du mot de passe
        Swal.fire({
            title: "Êtes-vous sûrs de vouloir vous déconnecter ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Annuler",
            confirmButtonText: "Confirmer",
          }).then((result)=>{
              console.log(result)
            if (result.isConfirmed) {
                console.log("Logout")
                //document.cookie = "data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                console.log(document.cookie)
                //navigate("/")
            }
        }
        )};

    return (
        <div className="block_log">
            <div className="formulaire">
            <Title
                name="Mon profil"
                signoutOn={true}
                flecheOn={true}
                infoOn={false}
                />
                <div className="OngletsSuivi">
                <Onglets name="Informations" active={activeTab === "Informations"}
                         onClick={() => setActiveTab("Informations")}/>
                <Onglets name="Mot de passe" active={activeTab === "Mot de passe"}
                         onClick={() => setActiveTab("Mot de passe")}/>
                </div>

            {activeTab === "Mot de passe" && (
        <div className="block_log">
            <div className="formulaire">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                <div className="champ">
                        <label className="name" htmlFor="old_mdp">Ancien mot de passe</label>
                        <input
                            type="text"
                            id="old_mdp"
                            placeholder="L'ancien mot de passe du connecté"
                            {...register("old_mdp", { required: true, maxLength: 90 })}
                        />
                    </div>

                    <div className="champ">
                        <label className="name" htmlFor="new_mdp">Nouveau mot de passe</label>
                        <input
                            type="text"
                            id="new_mdp"
                            placeholder="Le nouveau mot de passe du connecté"
                            {...register("new_mdp", { required: true, maxLength: 90 })}
                        />
                    </div>

                    <div className="champ">
                        <label className="name" htmlFor="conf">Confirmation</label>
                        <input
                            type="text"
                            id="conf"
                            placeholder="Confirmer le nouveau mot de passe du connecté"
                            {...register("conf", { required: true, maxLength: 90 })}
                        />
                    </div>

                    <span className="button">
            <button className="primary_button">Modifier le mot de passe</button>
          </span>
                </form>
            </div>
        </div>
    )}
    
    {activeTab === "Informations" && (
        <div className="block_log">
        <div className="formulaire">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="champ">
                        <label className="name" htmlFor="first_name">Prénom</label>
                        <input
                            type="text"
                            id="first_name"
                            placeholder="Le prénom du connecté"
                            {...register("first_name", { required: true, maxLength: 90 })}
                        />
                    </div>

                    <div className="champ">
                        <label className="name" htmlFor="last_name">Nom</label>
                        <input
                            type="text"
                            id="last_name"
                            placeholder="Le nom du connecté"
                            {...register("last_name", { required: true, maxLength: 90 })}
                        />
                    </div>

                    <div className="champ">
                        <label className="name" htmlFor="email">Adresse e-mail</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="L'adresse e-mail du connecté"
                            {...register("email", { required: true, maxLength: 90 })}
                        />
                    </div>

                    <span className="button">
            <button className="primary_button" id="test">Mettre à jour les informations</button>
          </span>
                </form>
            </div>
        </div>
    )}
    </div>
    </div>
)}

export default Infos