//customized assets
import "../assets/css/style.css";
import "../assets/css/navigation.css";
import "../assets/css/profil.css";

//components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import EmploiDuTemps from "../components/EmploisDuTemps";


function Profil() {
  return (
    <>

    <Header />
    <Sidebar />
    <main id="main" className="main">
    <EmploiDuTemps/>
    </main>

    </>
  );
}

export default Profil;
