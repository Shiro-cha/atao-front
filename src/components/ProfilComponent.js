import user3 from "../assets/images/user-3.jpg";


function ProfilComponent() {
  return (
    <>

    <main id="main" className="main">


      <section className="section profile profil-dash-doc">

        <div className="row">
          <div className="col-xl-12 information">

            <div className="card">
              <div className="card-body card-profil">

                <ul className="nav nav-tabs head-card nav-tabs-bordered">

                  <li className="nav-item info">
                    <h3>INFORMATIONS PERSONNELLES</h3>
                  </li>

                  <li className="nav-item">
                    <button className="btn-modif" data-bs-toggle="tab" data-bs-target="#profile-edit">Modifier</button>
                  </li>


                </ul>
                <div className="tab-content pt-2">

                  <div className="tab-pane fade show active  profile-overview" id="profile-overview">


                    <div className="row">
                      <div className="col-lg-3 col-md-4 label ">Titre:</div>
                      <div className="col-lg-9 col-md-8 text-modif">Docteur</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label ">Nom:</div>
                      <div className="col-lg-9 col-md-8 text-modif"> Anderson</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3 col-md-4 label ">Prénom:</div>
                      <div className="col-lg-9 col-md-8 text-modif">Kevin </div>
                    </div>




                    <div className="row">
                      <div className="col-lg-3 col-md-4 label">Contact:</div>
                      <div className="col-lg-9 col-md-8 text-modif">k.anderson@example.com</div>
                    </div>

                  </div>

                  <div className="tab-pane fade  profile-edit pt-3" id="profile-edit">


                    <form>
                      <div className="row mb-3">
                        <label for="profileImage" className="col-md-4 col-lg-3 col-form-label">Profile Image</label>
                        <div className="col-md-8 col-lg-9">
                          <img src={user3} alt="Profile" />
                          <div className="pt-2 down">
                            <button>Charger</button>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Titre:</label>
                        <div className="col-md-8 col-lg-9">
                          <select className="form-select" aria-label="Default select example">
                            <option disabled selected hidden>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Nom:</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="fullName" type="text" className="form-control" id="fullName" value="Anderson" />
                        </div>
                      </div>

                      <div className="row mb-3">
                        <label for="fullName" className="col-md-4 col-lg-3 col-form-label">Prenom:</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="fullName" type="text" className="form-control" id="fullName" value="Kevin" />
                        </div>
                      </div>



                      <div className="row mb-3">
                        <label for="Phone" className="col-md-4 col-lg-3 col-form-label">Contact:</label>
                        <div className="col-md-8 col-lg-9">
                          <input name="phone" type="text" className="form-control" id="Phone" value="(436) 486-3538 x29071" />
                        </div>
                      </div>





                      <div className="text-center">
                        <button type="submit" className="btn btn-primary">Sauvgarder</button>
                      </div>
                    </form>

                  </div>


                </div>

              </div>
            </div>

          </div>





        </div>

      </section>

    </main>

    </>
  );
}

export default ProfilComponent;
