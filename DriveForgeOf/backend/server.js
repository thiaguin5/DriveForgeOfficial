const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


// =================================
// CONFIGURAÇÃO CARSXE
// =================================

const CARSXE_API_KEY = process.env.CARSXE_API_KEY;

console.log(
  "API KEY carregada:",
  CARSXE_API_KEY ? "SIM" : "NÃO"
);


// =================================
// LISTA TEMPORÁRIA DE USUÁRIOS
// =================================

const users = [];


// =================================
// ROTA PRINCIPAL
// =================================

app.get("/", (req, res) => {
  res.json({
    mensagem: "API DriveForge funcionando!"
  });
});


// =================================
// API DE USUÁRIOS
// =================================

// LISTAR USUÁRIOS
app.get("/api/users", (req, res) => {
  res.json(users);
});


// CADASTRAR USUÁRIO
app.post("/api/users", (req, res) => {

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "Preencha todos os campos"
    });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password
  };

  users.push(newUser);

  res.status(201).json({
    message: "Usuário cadastrado com sucesso!",
    user: newUser
  });

});


// =================================
// API CARSXE
// =================================

app.get("/api/carros/imagens", async (req, res) => {

  try {

    const { make, model, year } = req.query;

    if (!make || !model) {
      return res.status(400).json({
        success: false,
        mensagem: "Marca e modelo são obrigatórios."
      });
    }

    const params = new URLSearchParams({
      key: CARSXE_API_KEY,
      make: make,
      model: model
    });

    if (year) {
      params.append("year", year);
    }

    const resposta = await fetch(
      `https://api.carsxe.com/images?${params.toString()}`
    );

    const dados = await resposta.json();

    res.status(resposta.status).json(dados);

  } catch (erro) {

    console.error("Erro CarsXE:", erro);

    res.status(500).json({
      success: false,
      mensagem: "Erro ao consultar a CarsXE."
    });

  }

});


// =================================
// INICIAR SERVIDOR
// =================================

app.listen(PORT, () => {
  console.log(
    `API DriveForge rodando em http://localhost:${PORT}`
  );
});