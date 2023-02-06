import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Myarticle from "../src/pages/Myarticle";
import Login from "./pages/Login";
import EditComments from "./pages/EditComments";
import Editpage from "./pages/Editpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/comments" element={<EditComments />} />
        <Route path="/comments/edit" element={<Editpage />} />
        <Route path="/my-article" element={<Myarticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
