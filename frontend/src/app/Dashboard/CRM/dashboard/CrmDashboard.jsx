import { FaPeopleRoof } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";

import { FaRupeeSign } from "react-icons/fa";
import { BiPurchaseTag } from "react-icons/bi";

const CrmDashboard = () => {
  return (
    <div className="flex  flex-wrap gap-8 ">
      <div className="bg-white w-[35rem] text-black rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Total Customers</h1>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">100,000</p>
          <FaPeopleRoof className="text-4xl text-blue-500" />
        </div>
      </div>

      <div className="bg-white w-[30rem] text-black rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Total Transactions</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FaRupeeSign className="text-xl text-indigo-400" />
            <span className="text-2xl font-bold">10,00,000</span>
          </div>
          <FaWallet className="text-4xl text-indigo-400" />
        </div>
      </div>
      <div className="bg-white w-[30rem] text-black rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Recent Purchases</h1>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">100,000</p>
          <BiPurchaseTag className="text-4xl text-purple-500" />
        </div>
      </div>
    </div>
  );
};

export default CrmDashboard;
