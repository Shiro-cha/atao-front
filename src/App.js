import { BrowserRouter, Routes, Route } from "react-router-dom";

//generale style
import "./assets/css/bootstrap.min.css";

//pages
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Profil from "./pages/Profil";
import Agenda from "./pages/Agenda";
import Coloc from "./pages/Coloc";
import EDT from "./pages/EDT";
import Taches from "./pages/Taches";

function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
      <Route exact path="/inscription" element={<Inscription/>}/>
      <Route exact path="/connexion" element={<Connexion/>}/>
      <Route exact path="/profil" element={<Profil/>}/>
      <Route exact path="/taches" element={<Taches/>}/>
      <Route exact path="/emplois-du-temps" element={<EDT/>}/>
      <Route exact path="/agenda" element={<Agenda/>}/>
      <Route exact path="/coloc" element={<Coloc/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
