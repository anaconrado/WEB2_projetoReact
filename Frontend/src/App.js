import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CharacterProvider } from './context/CharacterContext';

import Login from "./Pages/Login/Login.js";
import Cadastro from "./Pages/Cadastro/Cadastro.js";
import Costumizacao from "./Pages/Costumizacao/Costumizacao.js";
import Batalhar from "./Pages/Batalha/Batalha.js";
import Trelo from "./Pages/Trelo/Trelo.js";

function App() {
  return (
    <CharacterProvider>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/costumizacao" element={<Costumizacao />} />
          <Route path="/batalha" element={<Batalhar />} />
          <Route path="/trelo" element={<Trelo />} />
    </Routes>
    </BrowserRouter>
    </CharacterProvider>
  );
}

export default App;
