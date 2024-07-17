import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import IT from "../programs/it/IT";
import Tour from "../programs/tour/Tour";
import Law from "../programs/law/Law";
import Tis from "../programs/tis/Tis";
import Ped from "../programs/ped/Ped";
import Admission from "../admission/Admission";
import AboutUs from "../aboutus/AboutUs";

const MainRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/it" element={<IT />} />
            <Route path="/ped" element={<Ped />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/Law" element={<Law />} />
            <Route path="/tis" element={<Tis />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/about_us" element={<AboutUs />} />
        </Routes>
    );
};

export default MainRouting;
