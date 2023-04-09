//customized assets
import "../assets/css/style.css";
import "../assets/css/navigation.css";
import "../assets/css/profil.css";

//components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import All from "../components/All";


function Profil() {
  return (
    <>

    <Header />
    <Sidebar />
    <main id="main" className="main">
    <All/>
    </main>

    </>
  );
}

export default Profil;
