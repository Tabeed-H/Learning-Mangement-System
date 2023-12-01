import React from "react"; // importing react
import { BrowserRouter, Routes, Route } from "react-router-dom"; // importing react router
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Dashboard from "./screens/User/Dashboard";
import IDashboard from "./screens/Instructor/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/student/dashboard" element={<Dashboard />}></Route>
        <Route path="/instructor/dashboard" element={<IDashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
