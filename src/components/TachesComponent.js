import {useState} from "react";
import CircularIntegration from "./Check"
import Modal from "./Modal"

function MesTache(){
   
   return(
    <>
            
                
                
                   <table className="table table-hover p-3">
                  <thead>
                    <tr>
                      <th></th>
                      <th scope="col">Nom de la tâche</th>
                      <th>Temps restant</th>
                      <th scope="col">En commun</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        < CircularIntegration/>
                      </td>
                      <td>Mahandro sakafo</td>
                      <td>30 min</td>
                      <td >
                        <a href="" className="voir w-100 h-100">Voir</a>
                      </td>
                      <td><button className="dets">Details</button></td>
                      <td><button className="valide">Annuler</button></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="form-controle check-tache" />
                      </td>
                      <td>Mianatra</td>
                      <td>2 h</td>
                      <td>
                        <a href="" className="line"></a>
                      </td>
                      <td><button className="dets">Details</button></td>
                      <td><button className="valide">Annuler</button></td>
                    </tr>

                  </tbody>
                </table>
            
               
     <Modal/>
        
    </>
   
   )


}

function LeurTache(){

    return(
    
    <>
        <table className="table table-hover p-3">
                  <thead>
                    <tr>
                      <th></th>
                      <th scope="col">Nom de la tâche</th>
                      <th>Temps restant</th>
                      <th scope="col">En commun</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" className="form-controle check-tache" checked={true} disabled={true}/>
                      </td>
                      <td>Mahandro sakafo</td>
                      <td>30 min</td>
                      <td >
                        <a href="" className="voir w-100 h-100">Voir</a>
                      </td>
                      <td><button className="dets">Details</button></td>
                      <td><button className="valide">Rappeler</button></td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" className="form-controle check-tache" disabled={true}/>
                      </td>
                      <td>Mianatra</td>
                      <td>2 h</td>
                      <td>
                        <a href="" className="line"></a>
                      </td>
                      <td><button className="dets">Details</button></td>
                      <td><button className="valide">Rappeler</button></td>
                    </tr>

                  </tbody>
                </table>
    </>
   
   )

}







function TachesComponent() {
    const [tachename,setTacheName]= useState("mestache");
    const [openModal,setOpenModal]= useState(false);
    


    function handleClick(type){
        setTacheName(type);
    
    }  
    function handleOpenModal(evt){
    setOpenModal(true)
    }
    function handleCloseModal(evt){
    setOpenModal(false)
    }  
    
  return (
    <>

    <main  id="main" className="main">

      <div className="taches d-flex justify-content-center">
        <button className={tachename==="mestache"?"btn-taches active":"btn-taches"} onClick={()=>{handleClick("mestache")}}>Mes taches</button>
        <button className={tachename==="leurtache"?"btn-taches active":"btn-taches"} onClick={()=>{handleClick("leurtache")}}>Leur taches</button>
      </div>
      <section className="mes-list nouvaux bg-dark" >


          <div className="card">
          
            <div className="card-body card-profil">
            <ul className="nav nav-tabs head-card nav-tabs-bordered">  

                  <li className="nav-item info">
                    <h3>LES TÂCHES</h3>
                  </li>

                  <li className="nav-item">
                    <button className="btn-modif" data-bs-toggle="tab" data-bs-target="#profile-edit"
                    onClick={handleOpenModal}
                    >Ajouter</button>
                  </li>


                </ul>

                    {
                    tachename==="mestache"?
                    
                    <MesTache/>:
                    <LeurTache/>
                    
                    
                    }
            
            </div>
          </div>


      </section>
      
    <Modal open={openModal} handleClose={handleCloseModal}/>
    </main>

    </>
  );
}

export default TachesComponent;
