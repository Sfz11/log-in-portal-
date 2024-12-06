import React from "react";
import { toast } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProtectRoute from "./Routes/Private/ProtectRoute";
import PrivateRoute from "./Routes/Private/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<PrivateRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route element={<ProtectRoute />}>
        <Route path="/" element={<div>Home</div>} />
      </Route>
    </Routes>
  );
};

export default App;
