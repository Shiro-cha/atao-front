
//customized assets
import "../assets/css/logdoc.css";
import logo from "../assets/images/Logo-minipr-Atao.png";

//components
import ConnexionForm from "../components/ConnexionForm";

function Connexion() {
  return (
    <>

    <div className="big-content-logdoc container-fluid">
            <div className=" lign-log-doc">
                <div className="col-lg-3 col-md-7 col-12 mx-auto form-log-doc force">
                         <div className="img-logo-pro">
                             <img src={logo} alt="Logo Atao"/>
                         </div>
                         <div className="title-doc">
                             <p>
                                Saisissez ces informations pour continuer sur <span>ATAO</span>
                            </p>
                         </div>
                         <div className="content-form-doc">
                            <ConnexionForm />
                         </div>
                </div>
            </div>
    </div>

    </>
  )
}

export default Connexion;
