import {Link} from "react-router-dom";

function ConnexionForm() {
  return (
    <>

    <form className="form-control-log-doc">
        <div className="pseudo-table">
            <input id="yourname" name="email" type="email" />
            <label for="yourname">Email</label>
         </div>
         <div className="pseudo-table">
            <input id="yourname" name="yourname" type="password" />
            <label for="yourname">Mot de passe</label>
         </div>
         <div className="content-btn-connex">
               <button>Connexion</button>
         </div>
         <div className="inscri-log-doc">
             <p>Vous  n'avez pas encore un compte? <Link className="connecter" to="/inscription">Inscrivez-vous</Link></p>
         </div>
    </form>
    </>
  );
}

export default ConnexionForm;
