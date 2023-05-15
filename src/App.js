import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled, createGlobalStyle} from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  border: 0px;
`
function App() {
  return (
    <>
    <GlobalStyle/>
      <Header />
      <Footer />
    </>
  );
}

export default App;