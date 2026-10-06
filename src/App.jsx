import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Project from "./pages/Project";
import NavBar from "./componets/Navigtion/NavBar";
import FullScreenNav from "./componets/Navigtion/FullScreenNav";



const App = () => {


  return ( 

    <div >
      <NavBar/>
      <FullScreenNav/>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="agence" element={<Agence></Agence>} />
      <Route path="/project" element={<Project></Project>} />
    </Routes>
    </div>
  );
};

export default App;