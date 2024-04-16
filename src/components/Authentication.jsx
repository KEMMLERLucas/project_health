import './auth.css'
import { Link } from 'react-router-dom'

function Authentication() {
    return (
      <div className="block">
        <div className="picture"></div>
        <h1>Wonder</h1>
        <span className="button">

        <Link className="primary_button" to="/connexion">Se connecter</Link>
        <button className="secondary_button">S'inscrire</button>
        </span>
      </div>
    )
  }
  
  export default Authentication