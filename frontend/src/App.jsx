import Dashboard from "./app/Dashboard/Dashboard";
import LoginPage from "./app/LoginPage/LoginPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RegisterAgent from "./app/RegisterAgent/RegisterAgent";
import Sidebar from "./app/Sidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterAgent />} />
        <Route path="/homepage" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
