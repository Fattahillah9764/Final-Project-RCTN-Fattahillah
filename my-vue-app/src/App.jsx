import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import DetailPages from "./pages/DetailPages";
import NavbarComp from "./component/NavbarComp";

function App() {
  return (
    <>
    <NavbarComp/>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/detail" element={<DetailPages />} />
      </Routes>
    </>
  );
}

export default App
