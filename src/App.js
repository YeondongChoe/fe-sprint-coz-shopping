import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header/>
      <Footer/>
    </>
  );
}

export default App;