// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Sidebar from "./components/Sidebar/Sidebar.jsx";
// import Home from "./components/Home/Home.jsx";
// import Skills from "./components/Skills/Skills.jsx";
// import Project from "./components/Project/Project.jsx";
import Experience from "./components/Experience/Experience.jsx";

function App() {
  return (
    <Router>
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        {/* <Route path="/" element={<Sidebar />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Skills />} /> */}
        {/* <Route path="/" element={<Project />} /> */}
        <Route path="/" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
