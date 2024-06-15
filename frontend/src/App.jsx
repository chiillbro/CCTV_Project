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
import Location from "./app/Dashboard/Location/Location";
import UserList from "./app/Dashboard/UserList/UserList";
import AddDevice from "./app/Dashboard/AddDevice/AddDevice";

const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<AuthRequired />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard/crm" element={<Crm />} />
            <Route path="/dashboard/userlist" >
              <Route index element={<UserList />} />
              <Route path="register" element={<RegisterAgent />} />
            </Route>
            <Route path="/dashboard/devicelist" >
              <Route index element={<Location />} />
              <Route path="add-device" element={<AddDevice />} />
            </Route>
            <Route path="/dashboard/live-stream" element={<LiveViewLayout />}>
              <Route index element={<Home />} />
              <Route path="devices" element={<DeviceList />} />
              <Route path="stream" element={<LiveStream />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
