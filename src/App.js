import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Details from "./Details";
import Head from "./components/Head";



export default function App() {
  return (
    <Router>
       <Head />
      <Routes>
       
        <Route exact path="/" element={<Products/>} />
        <Route path="/product/:productId" element={<Details/>} />
      </Routes>
    </Router>
  )
}