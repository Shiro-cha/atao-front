//customized assets
import "../assets/css/style.css";
import "../assets/css/navigation.css";
import "../assets/css/profil.css";

//components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ColocComponent from "../components/ColocComponent";


function Profil() {
  return (
    <>

    <Header />
    <Sidebar />
    <ColocComponent />
    

    </>
  );
}

export default Profil;
