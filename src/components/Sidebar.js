import {Link,useLocation} from "react-router-dom"
import Button from "@mui/material/Button";


function Sidebar() {
    const {pathname} = useLocation();

  return (
    <>
    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
          <Link className={pathname=="/profil"?"nav-link active":"nav-link"} to="/profil">
            <i className="ri-24-hours-fill"></i>
            <span>Profil</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className={pathname=="/taches"?"nav-link active":"nav-link"} to="/taches">
            <i className="bi bi-question-circle"></i>
            <span>Mes tâches</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className={pathname=="/emplois-du-temps"?"nav-link active":"nav-link"} to="/emplois-du-temps">
            <i className="bi bi-envelope"></i>
            <span>Emploi du temps</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className={pathname=="/agenda"?"nav-link active":"nav-link"} to="/agenda">
            <i className="bi bi-card-list"></i>
            <span>Agenda</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className= {pathname=="/coloc"?"nav-link active":"nav-link"} to="/coloc">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Mes coloc</span>
          </Link>
        </li>

      </ul>



      <div className="foot-dec">
            <Button variant="contained" sx={{width:"100%"}}>Deconnexion</Button>
         </div>

    </aside>
    </>
  );
}

export default Sidebar;
