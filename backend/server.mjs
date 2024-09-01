// server.mjs
import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; // Importa o middleware CORS

const app = express();
const port = 3001; // Atualize a porta para 3001, conforme o erro indica

// Configura o middleware CORS
app.use(cors()); // Permite requisições de qualquer origem

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

let pedidos = [];

// Rota GET
app.get("/", (req, res) => {
  res.json(pedidos);
});

// Rota POST
app.post("/", (req, res) => {
  const novoPedido = req.body;
  pedidos.push(novoPedido);
  res.status(201).json(novoPedido);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
