import { useState } from "react";
import "./App.css";

const cars = [
{
id: 1,
brand: "BMW",
model: "320i M Sport",
year: 2024,
km: "12.400 km",
price: "R$ 289.900",
image:
"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
},
{
id: 2,
brand: "Mercedes-Benz",
model: "C 300 AMG Line",
year: 2023,
km: "18.700 km",
price: "R$ 319.900",
image:
"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
},
{
id: 3,
brand: "Porsche",
model: "911 Carrera",
year: 2022,
km: "8.900 km",
price: "R$ 899.900",
image:
"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
},
{
id: 4,
brand: "Audi",
model: "RS Q8",
year: 2024,
km: "6.200 km",
price: "R$ 789.900",
image:
"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
},
{
id: 5,
brand: "Range Rover",
model: "Velar R-Dynamic",
year: 2023,
km: "21.300 km",
price: "R$ 529.900",
image:
"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
},
{
id: 6,
brand: "Toyota",
model: "Corolla GR-S",
year: 2024,
km: "9.100 km",
price: "R$ 178.900",
image:
"https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=85",
},
];

function App() {
const [menuOpen, setMenuOpen] = useState(false);
const [search, setSearch] = useState("");
const [brand, setBrand] = useState("Todos");

const filteredCars = cars.filter((car) => {
const matchesSearch =
car.brand.toLowerCase().includes(search.toLowerCase()) ||
car.model.toLowerCase().includes(search.toLowerCase());

const matchesBrand = brand === "Todos" || car.brand === brand;

return matchesSearch && matchesBrand;


});

const scrollTo = (id) => {
document.getElementById(id)?.scrollIntoView({
behavior: "smooth",
});

setMenuOpen(false);


};

return (
<div className="app">
{/* HEADER */}
<header className="header">
<div className="container nav">
<button className="logo" onClick={() => scrollTo("inicio")}>
DRIVE<span>FORGE</span>
</button>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <button onClick={() => scrollTo("inicio")}>Início</button>
        <button onClick={() => scrollTo("estoque")}>Estoque</button>
        <button onClick={() => scrollTo("financiamento")}>
          Financiamento
        </button>
        <button onClick={() => scrollTo("sobre")}>Sobre nós</button>
        <button onClick={() => scrollTo("contato")}>Contato</button>
      </nav>

      <button className="header-button" onClick={() => scrollTo("estoque")}>
        Ver estoque
      </button>

      <button
        className="mobile-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        ☰
      </button>
    </div>
  </header>

  {/* HERO */}
  <main>
    <section className="hero" id="inicio">
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <span className="eyebrow">DRIVEFORGE MOTORS</span>

          <h1>
            Seu próximo carro
            <strong> começa aqui.</strong>
          </h1>

          <p>
            Veículos selecionados, procedência garantida e uma experiência
            premium para quem não abre mão de dirigir bem.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={() => scrollTo("estoque")}
            >
              Explorar estoque
              <span>→</span>
            </button>

            <button
              className="secondary-button"
              onClick={() => scrollTo("contato")}
            >
              Fale com um especialista
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div>
            <strong>+500</strong>
            <span>Carros vendidos</span>
          </div>

          <div>
            <strong>4.9/5</strong>
            <span>Avaliação dos clientes</span>
          </div>

          <div>
            <strong>10 anos</strong>
            <span>De experiência</span>
          </div>
        </div>
      </div>
    </section>

    {/* SEARCH */}
    <section className="search-section">
      <div className="container">
        <div className="search-box">
          <div className="search-title">
            <span>⌕</span>
            <div>
              <small>ENCONTRE SEU CARRO</small>
              <strong>O que você está procurando?</strong>
            </div>
          </div>

          <div className="search-controls">
            <div className="input-wrapper">
              <label>Buscar</label>
              <input
                type="text"
                placeholder="Marca ou modelo"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label>Marca</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option>Todos</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Porsche</option>
                <option>Audi</option>
                <option>Range Rover</option>
                <option>Toyota</option>
              </select>
            </div>

            <button
              className="search-button"
              onClick={() => scrollTo("estoque")}
            >
              Buscar veículos
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* ESTOQUE */}
    <section className="inventory section" id="estoque">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">NOSSO ESTOQUE</span>
            <h2>Veículos em destaque</h2>
          </div>

          <button
            className="outline-button"
            onClick={() => {
              setSearch("");
              setBrand("Todos");
            }}
          >
            Ver todos →
          </button>
        </div>

        {filteredCars.length > 0 ? (
          <div className="cars-grid">
            {filteredCars.map((car) => (
              <article className="car-card" key={car.id}>
                <div className="car-image">
                  <img src={car.image} alt={`${car.brand} ${car.model}`} />
                  <span className="car-tag">DESTAQUE</span>

                  <button
                    className="favorite"
                    aria-label="Favoritar veículo"
                  >
                    ♡
                  </button>
                </div>

                <div className="car-info">
                  <span className="car-brand">{car.brand}</span>

                  <h3>{car.model}</h3>

                  <div className="car-details">
                    <span>{car.year}</span>
                    <i></i>
                    <span>{car.km}</span>
                    <i></i>
                    <span>Automático</span>
                  </div>

                  <div className="car-footer">
                    <div>
                      <small>A partir de</small>
                      <strong>{car.price}</strong>
                    </div>

                    <button
                      className="arrow-button"
                      onClick={() => scrollTo("contato")}
                    >
                      →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>Nenhum veículo encontrado</h3>
            <p>Tente buscar por outra marca ou modelo.</p>
            <button
              className="primary-button"
              onClick={() => {
                setSearch("");
                setBrand("Todos");
              }}
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </section>

    {/* FINANCIAMENTO */}
    <section className="finance section" id="financiamento">
      <div className="container finance-grid">
        <div className="finance-content">
          <span className="eyebrow">FINANCIAMENTO</span>

          <h2>
            Seu carro novo
            <br />
            está mais perto.
          </h2>

          <p>
            Encontre as melhores condições de financiamento para realizar
            seu sonho. Nossa equipe cuida de tudo para você.
          </p>

          <div className="finance-features">
            <div>
              <span>✓</span>
              <p>
                <strong>Aprovação rápida</strong>
                <small>Análise de crédito simplificada</small>
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                <strong>Melhores taxas</strong>
                <small>Parcerias com os principais bancos</small>
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                <strong>Entrada facilitada</strong>
                <small>Condições personalizadas para você</small>
              </p>
            </div>
          </div>

          <button
            className="primary-button"
            onClick={() => scrollTo("contato")}
          >
            Simular financiamento →
          </button>
        </div>

        <div className="finance-card">
          <div className="finance-card-top">
            <span>SIMULE AGORA</span>
            <span>01 — 03</span>
          </div>

          <div className="finance-icon">▱</div>

          <h3>Quanto você deseja investir?</h3>

          <p>
            Faça uma simulação personalizada e descubra as melhores
            condições para seu próximo veículo.
          </p>

          <div className="fake-range">
            <span></span>
          </div>

          <div className="range-values">
            <span>R$ 50 mil</span>
            <strong>R$ 500 mil</strong>
          </div>
        </div>
      </div>
    </section>

    {/* SOBRE */}
    <section className="about section" id="sobre">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85"
              alt="Carro esportivo"
            />

            <div className="experience">
              <strong>10</strong>
              <span>
                anos de
                <br />
                excelência
              </span>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow dark">SOBRE A DRIVEFORGE</span>

            <h2>
              Mais que uma
              <br />
              concessionária.
            </h2>

            <p>
              Somos apaixonados por carros e por proporcionar experiências
              memoráveis. Cada veículo que entra para o nosso estoque passa
              por uma seleção criteriosa.
            </p>

            <p>
              Na DriveForge, transparência, qualidade e atendimento
              personalizado são os pilares da nossa relação com você.
            </p>

            <div className="about-numbers">
              <div>
                <strong>500+</strong>
                <span>Clientes satisfeitos</span>
              </div>

              <div>
                <strong>98%</strong>
                <span>Indicam a DriveForge</span>
              </div>
            </div>

            <button
              className="outline-button"
              onClick={() => scrollTo("contato")}
            >
              Conheça nossa história →
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta" id="contato">
      <div className="container cta-content">
        <span className="eyebrow">VAMOS CONVERSAR?</span>

        <h2>
          Pronto para encontrar
          <br />
          seu próximo carro?
        </h2>

        <p>
          Nossa equipe está pronta para ajudar você a encontrar o veículo
          perfeito.
        </p>

        <div className="cta-buttons">
          <button className="primary-button">
            Falar pelo WhatsApp ↗
          </button>

          <button className="secondary-button">
            Agendar visita
          </button>
        </div>
      </div>
    </section>
  </main>

  {/* FOOTER */}
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <button className="logo" onClick={() => scrollTo("inicio")}>
          DRIVE<span>FORGE</span>
        </button>

        <p>
          Experiência premium em veículos selecionados. Seu próximo carro,
          do jeito que você merece.
        </p>

        <div className="socials">
          <a href="#instagram">ig</a>
          <a href="#facebook">f</a>
          <a href="#youtube">yt</a>
        </div>
      </div>

      <div className="footer-column">
        <h4>Navegação</h4>
        <button onClick={() => scrollTo("inicio")}>Início</button>
        <button onClick={() => scrollTo("estoque")}>Estoque</button>
        <button onClick={() => scrollTo("financiamento")}>
          Financiamento
        </button>
        <button onClick={() => scrollTo("sobre")}>Sobre nós</button>
      </div>

      <div className="footer-column">
        <h4>Atendimento</h4>
        <span>Seg — Sex: 08h às 19h</span>
        <span>Sáb: 09h às 16h</span>
        <span>Dom: Fechado</span>
      </div>

      <div className="footer-column">
        <h4>Contato</h4>
        <span>(11) 99999-9999</span>
        <span>contato@driveforge.com.br</span>
        <span>São Paulo — SP</span>
      </div>
    </div>

    <div className="container footer-bottom">
      <span>© 2026 DriveForge Motors. Todos os direitos reservados.</span>
      <span>Privacidade &nbsp; • &nbsp; Termos de uso</span>
    </div>
  </footer>
</div>


);
}

export default App;