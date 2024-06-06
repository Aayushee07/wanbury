import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Details from "./Details";
import Head from "./components/Head";
import Home from "./Home"



export default function App() {
  return (
    <Router>
       <Head />
      <Routes>
       
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products/>} />
        <Route path="/product/:productId" element={<Details/>} />
      </Routes>
    </Router>
  )
}