//customized assets
import "../assets/css/style.css";
import "../assets/css/navigation.css";
import "../assets/css/Rendez-vous.css";
import "../assets/css/profil.css";

//components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TachesComponent from "../components/TachesComponent";


function Profil() {
  return (
    <>

    <Header />
    <Sidebar />
    <TachesComponent />

    </>
  );
}

export default Profil;
