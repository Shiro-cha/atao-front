import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Toast from "./Toast";

import baseUrl from "../config/baseUrl";

let api = axios.create(baseUrl)

function InscriptionForm() {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [sexe, setSexe] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confim, setPassword_confirm] = useState("");

  const [openToast, setOpenToast] = useState(false);
  const [typeToast, setTypeToast] = useState("success");

  const handleCloseToast = (evt) => {

      setOpenToast(false);

  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { nom:nom, prenom:prenom, sexe:sexe, email:email ,phone:phone,password:password, contact:phone};
    api.post("/create-user",data).then(function({data}){

      setTypeToast("success");
      setOpenToast(true)

    }).catch(function(err){

      setTypeToast("error");
      setOpenToast(true)

    })
  };

  return (
    <>
    <Toast open={openToast} handleClose={handleCloseToast} type={typeToast} />
    <form className="form" onSubmit={handleSubmit}>

        <div className="card-body">

            <div className="nov-group col-md-12">
                <div className="nov-group-prepend col-md-2">
                    <span className="nov-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                          </svg>
                    </span>
                </div>
                <div className="col-md-10 nov-group-input">
                    <input placeholder="Nom" name="identifiant" type="text"  value={nom}
              onChange={(event) => setNom(event.target.value)}/>
                </div>

            </div>
            <div className="nov-group col-md-12">
                <div className="nov-group-prepend col-md-2">
                    <span className="nov-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                          </svg>
                    </span>
                </div>
                <div className="col-md-10 nov-group-input">
                    <input placeholder="Prénom(s)..." name="identifiant" type="text"  value={prenom}
              onChange={(event) => setPrenom(event.target.value)} />
                </div>

            </div>
            <div className="nov-group col-md-12">
                <div className="nov-group-prepend col-md-2">
                    <span className="nov-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                          </svg>
                    </span>
                </div>
                <div className="col-md-10 nov-group-input">
                    <select name="Sexe" id="cars"
              onChange={(event) => setSexe(event.target.value)}>
                            <option value="" disabled selected hidden>Sexe</option>
                            <option value="Homme">Homme</option>
                            <option value="Femme">Femme</option>


                      </select>
                </div>

            </div>
            <div className="nov-group col-md-12">
                <div className="nov-group-prepend col-md-2">
                    <span className="nov-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                    </span>
                </div>
                <div className="col-md-10 nov-group-input">
                    <input placeholder="E-mail" name="identifiant" type="email"  value="" value={email}
              onChange={(event) => setEmail(event.target.value)}/>
                </div>

            </div>
            <div className="nov-group col-md-12">
                <div className="nov-group-prepend col-md-2">
                    <span className="nov-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                          </svg>
                    </span>
                </div>
                <div className="col-md-10 nov-group-input">
                    <input placeholder="Téléphone" name="identifiant" type="text"  value="" value={phone}
              onChange={(event) => setPhone(event.target.value)} />
                </div>

            </div>
            <div className="nov-group col-md-12">
                <div className="nov-group-prepend col-md-2">
                    <span className="nov-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                          </svg>
                    </span>
                </div>
                <div className="col-md-10 nov-group-input">
                    <input placeholder="Mot de passe " name="identifiant" type="password"  value=""
                    value={password}
              onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

            </div>
            <div className="nov-group col-md-12">
                <div className="nov-group-prepend col-md-2">
                    <span className="nov-group-text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                    </span>
                </div>
                <div className="col-md-10 nov-group-input">
                    <input placeholder="Confirmation mot de passe" name="identifiant" type="password"
                    value={password_confim}
              onChange={(event) => setPassword_confirm(event.target.value)}
                    />
                </div>

            </div>
            <p className="info-bottom">Vous avez déjà un compte? <Link to="/connexion">Connectez-vous</Link></p>
            <div className="text-center button-sub">
                <button type="submit" className="btn-round btn btn-info btn-lg btn-block btn-incri">Envoyer</button>

            </div>
        </div>



    </form>

    </>
  );
}

export default InscriptionForm;
