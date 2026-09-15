const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;
const DB = "./db.json";

// Rota inicial
app.get("/", (req, res) => {
    res.json({
        message: "API DriveForge funcionando!"
    });
});

// CADASTRAR USUÁRIO
app.post("/api/users", (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Preencha todos os campos."
        });
    }

    const database = JSON.parse(
        fs.readFileSync(DB, "utf8")
    );

    const newUser = {
        id: Date.now(),
        name,
        email,
        password
    };

    database.users.push(newUser);

    fs.writeFileSync(
        DB,
        JSON.stringify(database, null, 2)
    );

    res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        user: newUser
    });
});

// LISTAR USUÁRIOS
app.get("/api/users", (req, res) => {

    const database = JSON.parse(
        fs.readFileSync(DB, "utf8")
    );

    res.json(database.users);
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});