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
        <Route path="/my-article.html" element={<Myarticle />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/comments" element={<EditComments />} />
        <Route path="/admin/comments/edit" element={<Editpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
