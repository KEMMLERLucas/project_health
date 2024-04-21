import './auth.css'
import { Link } from 'react-router-dom'

function Authentication() {
    return (
    <div className="full_page_auth_container">
      <div className="auth_container">
        <div className="auth_image"></div>
        <h1 id="titre">Wonder</h1>
      </div>
        
        <span className="button">
          <Link className="primary_button" to="/connexion">Se connecter</Link>
          <Link className="secondary_button" to="/inscription">S'inscrire</Link>
        </span>


    </div>
    )
}
  
  export default Authentication;