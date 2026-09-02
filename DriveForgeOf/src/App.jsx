import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Search from "./Components/Search";
import Inventory from "./Components/Inventory";
import Finance from "./Components/Finance/Index";
import "./App.css";
 

function App() {
  return (
    <>
      <Header />
        <Hero />
        <Search />
        <Inventory />
        <Finance />

        

      <main>
        <h1>DRIVE FORGE</h1>
      </main>
    </>
  );
}

export default App;