import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import Analytics from "./pages/Analytics";
import FileManager from "./pages/FileManager";
import Messages from "./pages/Messages";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import User from "./pages/User";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Router>
      <SideBar>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/filemanager" element={<FileManager />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/order" element={<Order />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/user" element={<User />} />
      </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
