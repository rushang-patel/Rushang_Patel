import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "../components/pages/AboutMe";
import Experience from "../components/pages/Experience";
import Passion from "../components/pages/Passion";
import Projects from "../components/pages/Projects";
import Resume from "../components/pages/Resume";
import Contacts from "../components/pages/Contacts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/passion" element={<Passion />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default AppRoutes;
