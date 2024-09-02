import React, { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";

export default function index() {
  const [pedido, setPedido] = useState([]);

  const buscaDados = async () => {
    try {
      const dados = await axios.get("http://localhost:3001/");
      setPedido(dados.data);
      console.log(dados.data);
      console.log("tudo certo");
    } catch (err) {
      setTimeout(() => {
        alert(
          "Provavelmente o Back-End não está rodando, tente entrar na pasta e usar o 'node server.mjs' 1234456667867"
        );
      }, 3000);
    }
  };

  useEffect(() => {
    buscaDados();
  }, []);

  return (
    <S.Section>
      <S.Container>
        <h2>Gerenciar pedidos</h2>

        <ul>
          <li>Cliente</li>
          <li>Pão</li>
          <li>Carne</li>
          <li>Ações</li>
        </ul>
        <hr />
        <ul>
          <li>Fulano</li>
          <li>Tradicional</li>
          <li>Bovina</li>
          <li>Em preparo</li>
        </ul>

        {pedido.map((item, id) => (
          <ul key={id}>
            <li>
              {id + 1} # {item.nome}
            </li>
            <li>{item.pao}</li>
            <li>{item.carne}</li>
            <li>Em preparo</li>
          </ul>
        ))}
      </S.Container>
    </S.Section>
  );
}
