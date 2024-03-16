import { Routes, Route, Navigate } from 'react-router-dom'

import Bruh from "./Bruh";
import Login from "./pages/Login";

import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";


function App() {
  const [authUser, setAuthUser] = useState(null);
  return (
    
    <main className="app transition-all ease-in">
      <Routes>
        
        <Route path="/home" element={<Bruh />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<Navigate to="/login" />} />
        {/* Add other routes here */}
      </Routes>
    </main>
  )
}

export default App;