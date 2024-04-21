import '../components/css/auth.css'
import {Link, useNavigate} from 'react-router-dom'
import {useState} from "react";
import {useForm} from "react-hook-form"
import swal from 'sweetalert2'
import axios from "axios";
function Inscription() {
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const navigate = useNavigate()
  const customClass = {
    title:'custom-title',
    header: 'custom-header',
    confirmButton: 'custom-confirmButton',
  };
  async function auth(values){
    const api = "https://health.shrp.dev/users"
    try {
      setLoading(true)
      setError(false)
      const response = await axios.post(api,values)
      const data = await response.data.data
      let expires = new Date()
      console.log(data)
      expires.setTime(expires.getTime() + (data.expires*10000))
      setLoading(false)
      setError(false)
      navigate("/")
    } catch (error) {
      console.error(error)
      setLoading(false)
      setError(true)
    }
  }
  const {
    register, handleSubmit
  } = useForm()
  const onSubmit = (data) =>{
    data.role="16317dcf-1e2f-4fba-969f-6f6b15ba1062"
    switch(data){
      case data.password.length < 8:
        swal.fire({
          title: 'La longueur du mot de passe doit être supérieure à 8 caractères !',
          icon: 'error',
          confirmButtonText: 'Modifier',
          customClass:customClass
        })
        break;
      case data.email.length >= 48 :
        swal.fire({
          title: 'La longueur du mot de passe doit être inférieure à 48 caractères !',
          icon: 'error',
          confirmButtonText: 'Modifier',
          customClass:customClass
        })
        break;
      default : auth(data)
    }
  }
    return (
      <div className="full_page_co_container">
        <div className="formulaire_inscription">
          <h2 id="sous_titre">Inscription</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="champs">
              <div className="champ">
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" placeholder="Saisir votre prénom"{...register("last_name", {
                  required: true,
                  maxLength: 90
                })}/>
              </div>

              <div className="champ">
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" placeholder="Saisir votre nom"{...register("first_name", {
                  required: true,
                  maxLength: 90
                })}/>
              </div>

              <div className="champ">
                <label htmlFor="city">Ville</label>
                <input type="text" id="city" placeholder="Saisir votre ville" {...register("location", {
                  required: true,
                  maxLength: 90
                })}/>
              </div>

              <div className="champ">
                <label htmlFor="email">Adresse e-mail</label>
                <input type="text" id="email"
                       placeholder="Saisir votre adresse e-mail" {...register("email", {
                  required: true,
                  maxLength: 90
                })}/>
              </div>

              <div className="champ">
                <label htmlFor="mdp" id="mdp">Mot de passe</label>
                <input type="password" id="mdp"
                       placeholder="Saisir votre mot de passe" {...register("password")}/>
              </div>
            </div>

            <span className="button_inscription">
          <button className="primary_button">S'inscrire</button>
          <p>Déjà un compte ? <Link id="register" to="/">Je me connecte !</Link></p>
          </span>
          </form>

        </div>
      </div>
    )
}

export default Inscription