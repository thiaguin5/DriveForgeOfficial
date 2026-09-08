import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";

import Home from "./pages/Home";
import Hero from "./Components/Hero";
import Vehicles from "./pages/Vehicles";
import FinancePage from "./pages/FinancePage";
import Cadastro from "./pages/Cadastro";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Users from "./pages/Users";
import SolicitarCompra from "./Components/Solicitar Compra/Index";
import NotFound from "./Components/NotFound"







function App() {
  return (
    <>
      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/hero"
          element={<Hero />}
        />


        <Route
          path="/vehicles"
          element={<Vehicles />}
        />

        <Route
          path="/finance"
          element={<FinancePage />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

        <Route
          path="/about"
          element={<About />}
        />

         <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
<<<<<<< HEAD
          path="/Users"
=======
          path="/users"
>>>>>>> 4292c2416978c56823edefb70e28adb9c81fbfcf
          element={<users />}
        />

        <Route
          path="/solicitarcompra"
          element={<SolicitarCompra/>}
        />
         <Route
          path="*"
          element={<NotFound/>}
        />
        

         


      </Routes>
    </>
  );
}

export default App;