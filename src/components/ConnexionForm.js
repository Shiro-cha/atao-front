import { useState } from 'react';
import axios from 'axios';
import {Link,useNavigate} from "react-router-dom";

import baseUrl from "../config/baseUrl";

let api = axios.create(baseUrl)

function ConnexionForm() {

     const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    api.post('/auth-user', {
      email: email,
      mot_de_passe: password
    })
    .then(response => {
      // handle success
      console.log(response.data);
      navigate(`/taches?${response.data._id.toString()}`);
      
    })
    .catch(error => {
      // handle error
      console.log(error);
    });
  };

  return (
    <>
      <form className="form-control-log-doc" onSubmit={handleFormSubmit}>
        <div className="pseudo-table">
          <input id="yourname" name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <label htmlFor="yourname">Email</label>
        </div>
        <div className="pseudo-table">
          <input id="yourname" name="yourname" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <label htmlFor="yourname">Mot de passe</label>
        </div>
        <div className="content-btn-connex">
          <button type="submit">Connexion</button>
        </div>
        <div className="inscri-log-doc">
          <p>Vous n'avez pas encore un compte? <Link className="connecter" to="/inscription">Inscrivez-vous</Link></p>
        </div>
      </form>
    </>
  );
}

export default ConnexionForm;
