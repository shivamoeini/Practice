import React from "react";
import { Routes, Route } from "react-router-dom";
import DisplayMessages from "./componnet/Mange";
import Nav from "./componnet/Nav";
function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route to="/mang" element={<DisplayMessages />}/>
      </Routes>
    
    </>
  );
}

export default App;
