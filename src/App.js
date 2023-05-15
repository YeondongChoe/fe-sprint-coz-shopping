import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Pages/Mainpage";

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;