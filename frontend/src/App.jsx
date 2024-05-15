import Dashboard from "./app/Dashboard/Dashboard";
import LoginPage from "./app/LoginPage/LoginPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Crm from "./app/Dashboard/CRM/Crm";
import LiveViewLayout from "./app/Dashboard/Live_Stream/liveViewlayout/LiveViewLayout";
import RegisterAgent from "./app/Dashboard/RegisterAgent/RegisterAgent";
import Home from "./app/Dashboard/Live_Stream/home/Home";
import DeviceList from "./app/Dashboard/Live_Stream/deviceList/DeviceList";
import LiveStream from "./app/Dashboard/Live_Stream/live/LiveStream";
import AuthRequired from "./app/Authentication/AuthRequired";
import AdminRoutes from "./app/Admin/AdminRoutes";
import Profile from "./app/user/Profile";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<AuthRequired />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dashboard/crm" element={<Crm />} />
            <Route path="/dashboard/live-stream" element={<LiveViewLayout />} >
              <Route index element={<Home />} />
              <Route path="devices" element={<DeviceList />} />
              <Route path="stream" element={<LiveStream />} />
            </Route>
            <Route path="/register" element={<RegisterAgent />} />
            {/* Admin Routes */}
            <Route path='/admin' element={<AdminRoutes/>}>
              <Route path='./database/userlist' element=''/>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App
