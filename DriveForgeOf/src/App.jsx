import { useState } from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import FinancePage from "./pages/FinancePage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [state, setState] = useState();

  return (
    <div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veiculos" element={<Vehicles />} />
        <Route path="/financiamento" element={<FinancePage />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;