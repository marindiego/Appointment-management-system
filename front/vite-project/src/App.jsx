import NavBar from "./components/NavBar/NavBar"
import Home from "./views/Home"
import Appointments from "./views/Appointments"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import ErrorPage from "./views/ErrorPage/ErrorPage"

import { Routes, Route, useLocation } from "react-router-dom"

function App() {
  const location = useLocation()
  console.log(location)
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  )
}

export default App
