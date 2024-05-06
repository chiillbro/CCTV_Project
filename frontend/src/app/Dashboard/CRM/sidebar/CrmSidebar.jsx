import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { SiCivicrm } from "react-icons/si";
import { IoReturnUpBackOutline } from "react-icons/io5";

import { useState } from "react";
import CrmDashboard from "../dashboard/CrmDashboard";
import CrmCustomers from "../customers/CrmCustomers";
import CrmTransactions from "../transactions/CrmTransactions";
import CrmSettings from "../settings/CrmSettings";
import { useNavigate } from "react-router-dom";

const CrmSidebar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="relative h-full w-full text-white flex ">
      {/* Back to Dashboard */}

      <IoReturnUpBackOutline
        onClick={() => navigate("/dashboard")}
        className="w-8 h-8 hover:-translate-y-1 transition cursor-pointer absolute z-10 top-[18px] left-[20px] "
      />

      <div className=" flex flex-col w-full relative ">
        {/* Logo or Branding of Dashboard Item */}

        <div className="flex items-center   w-full bg-gray-800 h-20 justify-start pl-[6rem]   border-b border-gray-700">
          <SiCivicrm className="w-6 h-6 mr-2 text-[#FF00FF]" />
          <span className="text-2xl text-[#00FFFF]"> CRM</span>
          <input
            className="ml-[300px] w-[500px] rounded-md p-1 text-black"
            type="text"
            placeholder="Search customers"
          />
        </div>

        {/* Sidebar Tabs */}
        <div className="flex flex-col bg-gray-800 h-screen pt-4 gap-4 w-64">
          {/* Dashboard Tab */}
          <div
            onClick={() => handleClick("dashboard")}
            className="py-2 px-4 ml-11 flex items-center justify-start hover:bg-gray-700 cursor-pointer"
          >
            <MdDashboardCustomize className="w-6 h-6 mr-2" />
            Dashboard
          </div>

          {/* Customers Tab */}
          <div
            onClick={() => handleClick("customers")}
            className="py-2 px-4 ml-11 flex items-center justify-start hover:bg-gray-700 cursor-pointer"
          >
            <FaUsers className="w-6 h-6 mr-2" />
            Customers
          </div>

          {/* Transactions Tab */}
          <div
            onClick={() => handleClick("transactions")}
            className="py-2 px-4 ml-11 flex items-center justify-start hover:bg-gray-700 cursor-pointer"
          >
            <GrTransaction className="w-6 h-6 mr-2" />
            Transactions
          </div>

          {/* Settings Tab */}
          <div
            onClick={() => handleClick("settings")}
            className="py-2 px-4 ml-11 flex items-center justify-start hover:bg-gray-700 cursor-pointer"
          >
            <FiSettings className="w-6 h-6 mr-2" />
            Settings
          </div>
        </div>
        {/* Sidebar Tabs components */}
        <div
          className={`absolute top-[100px] left-[350px] w-[75rem] h-[100px]  `}
        >
          {activeTab === "dashboard" && <CrmDashboard />}
          {activeTab === "customers" && <CrmCustomers />}
          {activeTab === "transactions" && <CrmTransactions />}
          {activeTab === "settings" && <CrmSettings />}
        </div>
      </div>
    </div>
  );
};

export default CrmSidebar;
