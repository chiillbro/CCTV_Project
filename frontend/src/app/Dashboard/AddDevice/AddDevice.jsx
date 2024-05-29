import { useNavigate } from "react-router";
import Navbar from "../../Navbar/Navbar";
import { IoReturnUpBackOutline } from "react-icons/io5";

const AddDevice = () => {
  const navigate = useNavigate();
  return (
    <div className="  h-screen w-screen flex flex-col items-center ">
      <Navbar />
      <div className="relative flex flex-col w-full h-full items-center justify-center">
        <IoReturnUpBackOutline
          onClick={() => navigate("/dashboard")}
          className="w-8 h-8 hover:-translate-y-1 transition cursor-pointer absolute z-10 top-[10vh] left-[30%] "
        />

        <div className="w-[40%] text-center flex flex-col gap-10 border border-white p-6 rounded-md">
          <h1 className="text-2xl font-bold text-[#00FFFF]">Add Device</h1>
          <form className="flex flex-col gap-4">
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="deviceName">Device Name :</label>
              <input
                className="w-[60%] p-1 rounded-md outline-none text-black"
                type="text"
                id="deviceName"
                placeholder="Enter the device name"
              />
            </div>
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="deviceModel">Device Model :</label>
              <input
                className="w-[60%] p-1 rounded-md outline-none text-black"
                type="text"
                placeholder="Enter the device model"
                id="deviceModel"
              />
            </div>
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="branchCode">Branch Code :</label>
              <input
                className="w-[60%] p-1 rounded-md outline-none text-black"
                type="text"
                placeholder="Enter the branch code"
                id="branchCode"
              />
            </div>
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="state">Select State :</label>
              <select
                name="State"
                id="state"
                className=" w-[60%] text-black hover:cursor-pointer outline-none   font-semibold py-1 px-2  rounded-md"
              >
                <option>state </option>
                <option value="Karnataka">KA</option>
                <option value="Andhra Pradesh">AP</option>
                <option value="Tamil Nadu">TN</option>
                <option value="Kerala">KE</option>
              </select>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="cameraUrl">Camera Url :</label>
              <input
                className="w-[60%] p-1 rounded-md outline-none text-black"
                type="text"
                placeholder="Enter the camera url"
                id="cameraUrl"
              />
            </div>
            <div className="flex  justify-center">
              <button className="w-[85%] btn btn-neutral mt-4">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
