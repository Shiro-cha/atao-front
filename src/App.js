import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

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
    <CookiesProvider>
    <BrowserRouter>
      <Routes>
      <Route exact path="/inscription" element={<Inscription/>}/>
      <Route exact path="/connexion" element={<Connexion/>}/>
      <Route  path="/profil" element={<Profil/>}/>
      <Route  path="/taches" element={<Taches/>}/>
      <Route  path="/emplois-du-temps" element={<EDT/>}/>
      <Route  path="/agenda" element={<Agenda/>}/>
      <Route  path="/coloc" element={<Coloc/>}/>
      <Route  path="/home" element={<Home/>}/>
      <Route  path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </CookiesProvider>
    </>
  );
}

export default App;
