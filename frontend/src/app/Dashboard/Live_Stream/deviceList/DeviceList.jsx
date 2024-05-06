import DeviceDetails from "./DeviceDetails";
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const DeviceList = () => {

  return (
    <div className="flex flex-col gap-[10px] w-full m-[30px] p-[20px]rounded-md text-gray-300">
      <span>Device List</span>
      <div className="bg-gray-800">
        <div className="flex justify-between items-center m-5">
          <div>
            <input type="text" placeholder="Search"  className="w-full rounded-md p-2" />
          </div>
          <div className="flex gap-10">
            <select name="state" id="" className="bg-black hover:bg-transparent  font-semibold py-1 px-5 border border-gray-400 hover:border-gray-400 rounded">
              <option value="">state </option>
              <option value="karnataka">KA</option>
              <option value="andrapradesha">AP</option>
              <option value="tamilnadu">TN</option>
              <option value="kerala">KE</option>
            </select>
            <button className="bg-black hover:bg-transparent font-semibold py-1 px-5 border border-gray-400 hover:border-gray-400 rounded">
              Add +
            </button>
            <button className="flex items-center gap-[5px] bg-black hover:bg-transparent font-semibold py-1 px-5 border border-gray-400 hover:border-gray-400 rounded">Delete <MdDeleteOutline /></button>
          </div>

        </div>
        <table className="w-full border-collapse flex-col text-sm">

          <tr className="bg-[#44484C] ">
            <td className="py-3 px-4"><input type="checkbox" /></td>
            <td className="py-3 px-4">No</td>
            <td className="py-3 px-4">Name</td>
            <td className="py-3 px-4">State</td>
            <td className="py-3 px-4">Type</td>
            <td className="py-3 px-4">IP/Domain Name</td>
            <td className="py-3 px-4">Device Model</td>
            <td className="py-3 px-4">Port</td>
            <td className="py-3 px-4">SN</td>
            <td className="py-3 px-4">Online Status</td>
            <td className="py-3 px-4">Actions</td>
          </tr>


          {DeviceDetails.map((device, index) => (
            <>
              <tr key={index} >
                <td className="py-3 px-4"><input type="checkbox" /></td>
                <td className="py-3 px-4">{device.no}</td>
                <td className="py-3 px-4">{device.deviceName}</td>
                <td className="py-3 px-4">{device.state}</td>
                <td className="py-3 px-4">{device.type}</td>
                <td className="py-3 px-4">{device.ip}</td>
                <td className="py-3 px-4">{device.model}</td>
                <td className="py-3 px-4">{device.port}</td>
                <td className="py-3 px-4">{device.sn}</td>
                <td className="py-3 px-4">{device.onlineStatus}</td>
                <td className="py-3 px-4 flex">
                  <span className="mr-2 text-blue-500 cursor-pointer"><FaEye /></span>
                  <span className="mr-2 text-blue-500 cursor-pointer"><FaRegEdit /></span>
                  <span className="text-blue-500 cursor-pointer"><MdDeleteOutline /></span>
                </td>
              </tr>
            </>
          ))}

        </table>

      </div>
    </div>
  )
}

export default DeviceList;