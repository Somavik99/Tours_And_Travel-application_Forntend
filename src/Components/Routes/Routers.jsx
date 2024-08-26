import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Home/Home";
import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/Footer";
import ToursPage from "../Tours/ToursPage";
import SingleTourData from "../SingleTourData/SingleTourData";
import SignUp from "../SignUp/SignUp";
import Login from "../LogIn/Login";
import { AnimatePresence } from "framer-motion";
import UserProfile from "../UserProfile/UserProfile";

function Routers() {
  const location = useLocation()
  return (
    <>
      <NavBar />
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/getalltours" element={<ToursPage />} />
        <Route path="/getalltours/:id" element={<SingleTourData />} />
        <Route path="/:id" element={<SingleTourData />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/user" element={<UserProfile/>}/>
      </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default Routers;
