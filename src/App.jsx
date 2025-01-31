import "./App.css";
import React from "react";
import Login from "../src/components/Login";   
import Dashboard from "../src/components/Dashboard";                                                                    
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
