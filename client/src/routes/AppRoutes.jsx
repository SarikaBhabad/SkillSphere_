import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Certifications from "../pages/Certifications/Certifications";
import Activities from "../pages/Activities/Activities";
import Achievements from "../pages/Achievements/Achievements";
import SkillJourney from "../pages/SkillJourney/SkillJourney";
import Portfolio from "../pages/Portfolio/Portfolio";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/skill-journey" element={<SkillJourney />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;