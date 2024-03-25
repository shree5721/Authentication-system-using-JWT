import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/login/Login'
import Navigation from './Components/navbar/Navigation'
import ChangePassword from './Components/changePassword/ChangePassword'
import Welcome from './Components/welcome/Welcome'
import ProtectedRoute from './utils/ProtectedRoute'

const App = () => {
  return (
      <BrowserRouter>
          <Navigation />
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/changePassword" element={<ChangePassword />} />
              <Route path="/welcome" element={<ProtectedRoute><Welcome /></ProtectedRoute>} />

          </Routes>
      </BrowserRouter>
  );
}

export default App