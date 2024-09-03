// server.mjs
import express from "express"; // Importa o framework Express para facilitar a criação do servidor web
import bodyParser from "body-parser"; // body-parser transforma esse JSON em um objeto JavaScript para que você possa utilizá-lo na sua aplicação.
import cors from "cors"; // Importa o middleware CORS para permitir que o servidor aceite requisições de diferentes origens

const app = express(); // Cria uma instância do Express
const port = 3001; // Define a porta em que o servidor vai rodar (3001)

app.use(cors()); // Configura o CORS para permitir requisições de qualquer origem

app.use(bodyParser.json()); // Configura o middleware para analisar o corpo das requisições no formato JSON

let pedidos = []; // Array que armazenará os pedidos recebidos

// Define uma rota GET para retornar a lista de pedidos
app.get("/", (req, res) => {
  res.json(pedidos); // Retorna a lista de pedidos em formato JSON
});

// Define uma rota POST para adicionar um novo pedido
app.post("/", (req, res) => {
  const novoPedido = req.body; // Obtém o novo pedido do corpo da requisição
  pedidos.push(novoPedido); // Adiciona o novo pedido ao array de pedidos
  res.status(201).json(novoPedido); // Retorna o novo pedido com o status HTTP 201 (Criado)
});

// Inicia o servidor na porta especificada e exibe uma mensagem no console
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`); // Informa que o servidor está rodando na porta 3001
});

// node server.mjs
