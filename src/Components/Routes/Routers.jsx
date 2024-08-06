import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer"
import ToursPage from "../Tours/ToursPage";

function Routers() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getalltours" element={<ToursPage />} />
        <Route path="/singletourdata/:id" />
      </Routes>
      <Footer/>
    </>
  );
}

export default Routers;
