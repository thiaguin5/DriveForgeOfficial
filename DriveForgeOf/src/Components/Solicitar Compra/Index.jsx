import React from "react";
import "./Solicitar.css";

export default function SolicitarCompra() {
  const telefone = "5511987654321";

  const mensagem = encodeURIComponent(
    "Olá! Gostaria de solicitar uma compra."
  );

  const abrirWhatsApp = () => {
    window.open(
      `https://wa.me/${telefone}?text=${mensagem}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="btn-container">
      <button onClick={abrirWhatsApp} className="btn-whatsapp">
        Solicitar Compra
      </button>
    </div>
  );
}