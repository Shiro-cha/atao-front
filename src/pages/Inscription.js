
//customized assets
import "../assets/css/Inscription1.css";
import imgrdv from "../assets/images/imgrdv.70868cba.png";

//components
import InscriptionForm from "../components/InscriptionForm";


function Inscription(){

  return(

    <>

    <div className="reps">
       <div className=" row  content-information col-md-12">
         <div className="col-md-7 flex-content-text">
            <h1>Voulez-vous gerer vos tâches entre colocataire?
                Alors, inscrivez-vous!!</h1>
            <img src={imgrdv} alt="image calendar"/>
         </div>
         <div className="col-md-5 flex-content-information">
            <div className="row ligne-in col-md-9">
                <div className=" rouge col-md-12">

                      <InscriptionForm/>

                </div>
            </div>
         </div>
       </div>
    </div>

    </>
  )


}

export default Inscription;
