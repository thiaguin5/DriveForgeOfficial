import Header from "../components/Header";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Inventory from "../components/Inventory";
import Finance from "../components/Finance";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Search />
      <Inventory />
      <Finance />
    </>
  );
}

export default Home;