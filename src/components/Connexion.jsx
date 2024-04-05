import './auth.css'
import {Link} from 'react-router-dom'
import {useState} from "react";
import {useForm} from "react-hook-form"

function Connexion() {
    const {
        register, handleSubmit
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (<div className="block_log">
            <div className="formulaire">
                <h2>Connexion</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="champ">
                        <label htmlFor="email">Adresse e-mail</label>
                        <input type="text" id="email"
                               placeholder="Saisir votre adresse e-mail" {...register("email", {required: true, maxLength:90})}/>
                    </div>
                    <div className="champ">
                        <label htmlFor="mdp" id="mdp">Mot de passe</label>
                        <input type="password" id="mdp"
                               placeholder="Saisir votre mot de passe"/> {...register("password")}/>
                    </div>

                    <p id="forget_mdp">Mot de passe oublié ?</p>

                    <span className="button">
                        <button className="primary_button">Se connecter</button>
                    </span>
                    <p>Pas de compte ? <Link id="register" to="/inscription">Je m'inscris !</Link></p>
                </form>
            </div>
        </div>

    )
    return (<div className="block_log">
        <div className="formulaire">
            <h2>Connexion</h2>

            <div className="champ">
                <label for="email">Adresse e-mail</label>
                <input type="text" id="email"
                       placeholder="Saisir votre adresse e-mail"/>
            </div>

            <div className="champ">
                <label for="mdp" id="mdp">Mot de passe</label>
                <input type="password" id="mdp"
                       placeholder="Saisir votre mot de passe"/>
            </div>

            <p id="forget_mdp">Mot de passe oublié ?</p>

            <span className="button">
          <button className="primary_button">Se connecter</button>
          </span>
            <p>Pas de compte ? <Link id="register" to="/inscription">Je m'inscris !</Link></p>
        </div>
    </div>)
}

export default Connexion