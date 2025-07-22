import React from "react";
import { Routes, Route } from "react-router-dom";
import Loginpage from "./screen/Loginpage";
import Signuppage from "./screen/signuppage";
import Homepage from "./screen/Homepage";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signuppage />} />

      <Route path="/signup" element={<Signuppage />} />
      <Route path="/login" element={<Loginpage />} />

      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
