import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Mainpage from "./Pages/Mainpage";

function App() {
  return (
    <>
      <Header/>
      <Mainpage/>
      <Footer/>
    </>
  );
}

export default App;