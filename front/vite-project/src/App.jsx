import NavBar from "./components/NavBar/NavBar"
import Home from "./views/Home"
import Appointments from "./views/Appointments"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import ErrorPage from "./views/ErrorPage/ErrorPage"
//import { useSelector } from "react-redux"
import { Routes, Route } from "react-router-dom"
import ScheduleAppointment from "./views/ScheduleAppointment/ScheduleAppointment"

function App() {
  // const location = useLocation()
  // console.log(location)
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/appointments/schedule" element={<ScheduleAppointment />} />
    </Routes>
    </>
  )
}

export default App
