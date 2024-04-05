import "C:/Users/Océane/OneDrive/Documents/GitHub/project_health/src/styles/auth.css"
import { Link } from 'react-router-dom'

function Inscription() {
    return (
      <div className="block_log">
        <div className="formulaire">
          <h2>Inscription</h2>

          <div className="champs">
          <div className="champ">
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" placeholder="Saisir votre prénom"/>
          </div>

          <div className="champ">
          <label for="nom">Nom</label>
          <input type="text" id="nom" placeholder="Saisir votre nom"/>
          </div>

          <div className="champ">
          <label for="city">Ville</label>
          <input type="text" id="city" placeholder="Saisir votre ville"/>
          </div>

          <div className="champ">
          <label for="email">Adresse e-mail</label>
          <input type="text" id="email" placeholder="Saisir votre adresse e-mail"/>
          </div>

          <div className="champ">
          <label for="mdp" id="mdp">Mot de passe</label>
          <input type="password" id="mdp" placeholder="Saisir votre mot de passe"/>
          </div>
          </div>

          <span className="button">
          <button className="primary_button">S'inscrire</button>
          </span>
          <p>Déjà un compte ? <Link id="register" to="/connexion">Je me connecte !</Link></p>
        </div>
      </div>
    )
  }
  
  export default Inscription