import { useState } from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import FinancePage from "./pages/FinancePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cadastro from "./pages/Cadastro";





function App() {
  const [state, setState] = useState();

  return (
    <div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Veiculos" element={<Vehicles />} />
        <Route path="/Financiamento" element={<FinancePage />} />
        <Route path="/Sobre" element={<About />} />
        <Route path="/Contato" element={<Contact />} />
         <Route path="/Cadastro" element={<Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;