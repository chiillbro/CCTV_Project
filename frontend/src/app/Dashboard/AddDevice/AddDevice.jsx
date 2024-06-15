import { useNavigate } from "react-router";
import { useState } from 'react'
import Navbar from "../../Navbar/Navbar";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useAddDeviceMutation } from "../../../redux/api/deviceApi";
import { toast } from 'react-toastify'

const AddDevice = () => {
  const [deviceName, setDeviceName] = useState("")
  const [deviceModel, setDeviceModel] = useState("")
  const [branchCode, setBranchCode] = useState("")
  const [state, setState] = useState("")
  const [api, setApi] = useState("")

  const navigate = useNavigate();

  const [addDevice, { isLoading }] = useAddDeviceMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDevice({
        deviceName,
        deviceModel,
        branchCode,
        state,
        api
      }).unwrap()
      navigate('/dashboard/devicelist')
      toast.success("API Registered")
    } catch (error) {
      console.log(error)
      toast.error(error.data?.message || error.message)
    }
  }

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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="deviceName">Device Name :</label>
              <input
                className="w-[60%] p-1 rounded-md outline-none text-black"
                type="text"
                id="deviceName"
                placeholder="Enter the device name"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="deviceModel">Device Model :</label>
              <input
                className="w-[60%] p-1 rounded-md outline-none text-black"
                type="text"
                placeholder="Enter the device model"
                id="deviceModel"
                value={deviceModel}
                onChange={(e) => setDeviceModel(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="branchCode">Branch Code :</label>
              <input
                className="w-[60%] p-1 rounded-md outline-none text-black"
                type="text"
                placeholder="Enter the branch code"
                id="branchCode"
                value={branchCode}
                onChange={(e) => setBranchCode(e.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="state">Select State :</label>
              <select
                name="State"
                id="state"
                className=" w-[60%] text-black hover:cursor-pointer outline-none   font-semibold py-1 px-2  rounded-md"
                onChange={(e) => setState(e.target.value)}
                value={state}
              >
                <option>state </option>
                <option value="KA">KA</option>
                <option value="AP">AP</option>
                <option value="TN">TN</option>
                <option value="KE">KE</option>
              </select>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <label htmlFor="cameraUrl">Camera Url :</label>
              <input
                className="w-[60%] p-1 rounded-md outline-none text-black"
                type="text"
                value={api}
                placeholder="Enter the camera url"
                id="cameraUrl"
                onChange={(e) => setApi(e.target.value)}
              />
            </div>
            <div className="flex  justify-center">
              <button className="w-[85%] btn btn-neutral mt-4">
                {isLoading ? "Adding..." : "Add"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;