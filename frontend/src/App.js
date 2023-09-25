import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import HomePage from "./components/home";
import AuthPage from "./components/home";

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
