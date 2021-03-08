import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/servicos/:id" element={<ProductDetails />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
