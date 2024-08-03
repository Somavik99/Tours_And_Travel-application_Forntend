import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import NavBar from "../Navbar/NavBar"


function Routers() {
  return (
    <>
     <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}

export default Routers
