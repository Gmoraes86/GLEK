import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "../Views/Container/Index";
import Dashboard from "../Views/Dashboard/Index";
import Provider from "../Views/Provider";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Dashboard />} />
          <Route path="contatos" element={<Provider />}>
            <Route path=":contactId" element={<b>Contato ID</b>} />
            <Route path="adicionar" element={<b>novo contato</b>} />
            <Route index element={<b>Contatos</b>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
