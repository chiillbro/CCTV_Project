import Dashboard from "./app/Dashboard/Dashboard";
import LoginPage from "./app/LoginPage/LoginPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RegisterAgent from "./app/RegisterAgent/RegisterAgent";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterAgent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
