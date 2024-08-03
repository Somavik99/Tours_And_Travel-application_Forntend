import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer"

function Routers() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default Routers;
