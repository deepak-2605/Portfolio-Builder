import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import HomePage from "./components/home";
import MainPage from "./components/main";

function App() {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </BrowserRouter>
    </AuthState>
  );
}

export default App;
