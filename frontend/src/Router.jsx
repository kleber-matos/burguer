import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home/index";
import Pedidos from "../src/pages/Pedidos/index";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}
