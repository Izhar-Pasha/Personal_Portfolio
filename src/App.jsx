import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./components/Home/Home.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Project from "./components/Project/Project.jsx";
import Experience from "./components/Experience/Experience.jsx";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
