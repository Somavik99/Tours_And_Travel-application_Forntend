import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import ToursPage from "../Tours/ToursPage";
import SingleTourData from "../SingleTourData/SingleTourData";

function Routers() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getalltours" element={<ToursPage />} />
        <Route path="/getalltours/:id" element={<SingleTourData/>} />
        <Route path="/:id" element={<SingleTourData/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default Routers;
