import axios from "axios";
import * as S from "../src/GlobalStyled";
import React, { useEffect, useState } from "react";

import Router from "../src/Router";

export default function App() {
  // const [pedido, setPedido] = useState([]);
  // const [nome, setNome] = useState("");
  // const [carne, setCarne] = useState("Bovido");
  // const [pao, setPao] = useState("Tradicional");

  // const buscaDados = async () => {
  //   try {
  //     const dados = await axios.get("http://localhost:3001/");
  //     setPedido(dados.data);
  //     console.log(dados.data);
  //     console.log("tudo certo");
  //   } catch (err) {
  //     setTimeout(() => {
  //       alert(
  //         "Provavelmente o Back-End não está rodando, tente entrar na pasta e usar o 'node server.mjs'"
  //       );
  //     }, 3000);
  //   }
  // };

  // const criarBurguer = () => {
  //   if (nome == "") {
  //     alert("Tente novamente!");
  //   } else {
  //     console.log("Criado!");
  //     console.log(nome);
  //     console.log(pao);
  //     console.log(carne);

  //     axios.post("http://localhost:3001/", {
  //       nome: nome,
  //       pao: pao,
  //       carne: carne,
  //     });
  //     setTimeout(() => {
  //       buscaDados();
  //     }, 1000);
  //   }
  // };

  // useEffect(() => {
  //   buscaDados();
  // }, []);

  return (
    <>
      <S.GlobalStyle />
      <Router />

      {/* ------------------------------------- */}
      {/* <h1>Buguer</h1>
      <div>
        <h2>Crie seu Burhuer</h2>
        <div>
          <label htmlFor="nome">nome:</label>
          <input
            onChange={(e) => setNome(e.target.value)}
            id="nome"
            type="text"
          />
          <br />

          <label htmlFor="carne">Escolha seu pão</label>
          <select
            onChange={(e) => setPao(e.target.value)}
            name="Tradicional"
            id="Tradicional"
          >
            <option value="Tradicional">Tradicional</option>
            <option value="Artesanal"> Artesanal</option>
            <option value="Integral">Integral</option>
          </select>
          <br />
          <label htmlFor="carne">Escolha sua carne</label>
          <select
            onChange={(e) => setCarne(e.target.value)}
            name="Bovino"
            id="Bovino"
          >
            <option value="Bovino">Bovino</option>
            <option value="Picanha">Picanha</option>
            <option value="Frango">Frango</option>
          </select>
          <br />
          <button onClick={criarBurguer}>criar meu Burguer</button>
        </div>
        <hr />
        <h2>Seu pedido</h2>
      </div>

      {pedido.map((item, id) => (
        <div key={id}>
          <h2>{item.nome}</h2>
          <h2>{item.pao}</h2>
          <h2>{item.carne}</h2>
        </div>
      ))} */}
    </>
  );
}
