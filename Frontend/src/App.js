import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login.js";
import Cadastro from "./Pages/Cadastro/Cadastro.js";
import Costumizacao from "./Pages/Costumizacao/Costumizacao.js";
import Trelo from "./Pages/Trelo/Trelo.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/costumizacao" element={<Costumizacao />} />
          <Route path="/trelo" element={<Trelo />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
