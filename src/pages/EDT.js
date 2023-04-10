//customized assets
import "../assets/css/style.css";
import "../assets/css/navigation.css";
import "../assets/css/profil.css";

//components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
//import All from "../components/All";
import EmploisDuTempsTable from "../components/EmploisDuTempsTable";

function Profil() {
  return (
    <>

    <Header />
    <Sidebar />
    <main id="main" className="main">
    <EmploisDuTempsTable/>
    </main>

    </>
  );
}

export default Profil;
