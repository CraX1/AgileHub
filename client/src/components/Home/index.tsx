import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import TeamOverview from "./Team Overview/TeamOverview";
import Projects from "./Projects/Projects";
import Chat from "./Chat/Chat";
import Issues from "./Issues/Issues";
import Profile from "./Profile/Profile";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex bg-proj_gray-secondary">
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team-overview" element={<TeamOverview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
};

export default Home;
