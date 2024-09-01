import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";
import Logo from "../../assets/logo.png";

export default function index() {
  return (
    <>
      <S.Header>
        <Link to="/">
          <img src={Logo} alt="Logo da marca" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/PEDIDOS">PEDIDOS</Link>
            </li>
          </ul>
        </nav>
      </S.Header>
    </>
  );
}
