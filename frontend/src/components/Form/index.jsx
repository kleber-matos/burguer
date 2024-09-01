import React, { useEffect, useState } from "react";
import * as S from "./styled";
import axios from "axios";
import Swal from "sweetalert2";

export default function index() {
  const [pedido, setPedido] = useState([]);
  const [nome, setNome] = useState("");
  const [carne, setCarne] = useState("Bovido");
  const [pao, setPao] = useState("Tradicional");
  const [finzalizar, setFinalizar] = useState(true);

  const buscaDados = async () => {
    try {
      const dados = await axios.get("http://localhost:3001/");
      setPedido(dados.data);
      console.log(dados.data);
      console.log("tudo certo");
    } catch (err) {
      setTimeout(() => {
        alert(
          "Provavelmente o Back-End não está rodando, tente entrar na pasta e usar o 'node server.mjs'"
        );
      }, 3000);
    }
  };

  const criarBurguer = () => {
    if (nome == "") {
      alert("Tente novamente!");
    } else {
      console.log("Criado!");
      console.log(nome);
      console.log(pao);
      console.log(carne);

      axios.post("http://localhost:3001/", {
        nome: nome,
        pao: pao,
        carne: carne,
      });
      setTimeout(() => {
        buscaDados();
      }, 1000);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Pedido confirmado",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const verPedido = () => {
    if (pedido.length === 0) {
      alert("Você precisa comprar um Burguer para finalizar!");
    } else {
      criarBurguer();
      setFinalizar(!finzalizar);
      if (finzalizar) {
        let timerInterval;
        Swal.fire({
          title: "Obrigado(a), volte sempre!",
          html: "Você esta sendo direcionado para os 'pedidos' <b></b> m/s.",
          timer: 4000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
            window.location.pathname = "/pedidos";
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }
    }
  };

  useEffect(() => {
    buscaDados();
  }, []);

  return (
    <S.Section>
      <S.Form>
        <h2>Monte seu Burguer:</h2>

        <label htmlFor="nome">NOME</label>
        <input
          onChange={(e) => setNome(e.target.value)}
          id="nome"
          type="text"
          maxLength={20}
          placeholder="Digite seu nome..."
        />
        {/* ----- */}
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
      </S.Form>

      <S.Button onClick={criarBurguer}>CRIAR MEU BURGUER!</S.Button>
      <S.Button onClick={verPedido}>Finalizar</S.Button>
    </S.Section>
  );
}
