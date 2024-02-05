import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login/Login.js";
import Cadastro from "./Pages/Cadastro/Cadastro.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
