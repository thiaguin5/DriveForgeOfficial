
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