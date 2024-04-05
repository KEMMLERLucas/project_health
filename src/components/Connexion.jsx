import './auth.css'
import { Link } from 'react-router-dom'

function Connexion() {
    return (
      <div className="block_log">
        <div className="formulaire">
          <h2>Connexion</h2>

          <div className="champ">
          <label for="email">Adresse e-mail</label>
          <input type="text" id="email" placeholder="Saisir votre adresse e-mail"/>
          </div>

          <div className="champ">
          <label for="mdp" id="mdp">Mot de passe</label>
          <input type="password" id="mdp" placeholder="Saisir votre mot de passe"/>
          </div>

          <p id="forget_mdp">Mot de passe oublié ?</p>

          <span className="button">
          <button className="primary_button">Se connecter</button>
          </span>
          <p>Pas de compte ? <Link id="register" to="/inscription">Je m'inscris !</Link></p>
        </div>
      </div>
    )
  }
  
  export default Connexion