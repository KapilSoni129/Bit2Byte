import { Routes, Route, Navigate } from 'react-router-dom'

import Bruh from "./Bruh";
import Login from "./pages/Login";

function App() {

  return (
    
    <main className="app transition-all ease-in">
      <Routes>
        <Route path="/page" element={<Bruh />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/*" element={<Navigate to="/login" />} />
        {/* Add other routes here */}
      </Routes>
    </main>
  )
}

export default App;