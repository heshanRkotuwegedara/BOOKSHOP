import Header from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
  <header>
    <Header />
  </header>
  <main>
    <Routes>
      <Route path = "/" element={<Home/>} exact />
      <Route path = "/add" element={<AddProduct/>} exact />
    </Routes>
  </main>
  </React.Fragment>
);
}

export default App;
