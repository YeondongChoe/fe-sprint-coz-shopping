import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Mainpage from "./Pages/Mainpage";
import Productpage from "./Pages/Productpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage/>} />
          <Route path="/Products/list" element={<Productpage/>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;