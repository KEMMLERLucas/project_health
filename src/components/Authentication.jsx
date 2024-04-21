// Authentication.jsx
import './auth.css'
import { Link } from 'react-router-dom'

function Authentication({ onLogin }) {
    return (
        <div className="full_page_auth_container">
            <div className="auth_container">
                <div className="auth_image"></div>
                <h1 id="titre">Wonder</h1>
            </div>
            <span className="button">
                <button className="primary_button" onClick={onLogin}>Se connecter</button>
                <Link className="secondary_button" to="/inscription">S'inscrire</Link>
            </span>
        </div>
    );
}

export default Authentication;