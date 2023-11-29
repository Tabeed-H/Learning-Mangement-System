import React from "react"; // importing react
import { BrowserRouter, Routes, Route } from "react-router-dom"; // importing react router
import Login from "./screens/Login";
import Signup from "./screens/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
