import Navbar from '../../Navbar/Navbar'
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useGetAllDevicesQuery } from '../../../redux/api/deviceApi';
import { Link } from 'react-router-dom';

const Location = () => {
  const { data: devices, error, isLoading } = useGetAllDevicesQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(devices)
  return (
    <div className='h-screen w-screen'>
      <Navbar />
      <div className='flex flex-col items-center gap-[50px]'>
        <form
          className='flex justify-around items-center w-[70vw] h-[50px] bg-gray-800 rounded-md p-[10px] mt-10  border-gray-700 border-b-[1px] gap-[50px]'
        >
          <div className='flex justify-between items-center gap-[50px]'>
            <select
              name=""
              id="state"
              className="bg-white h-[31px] rounded-md text-gray-500 pr-[10px]"
            >
              <option value="">Select a state</option>
              <option value="KA">KA</option>
              <option value="KA">TL</option>
              <option value="KA">AP</option>
              <option value="KA">TN</option>
            </select>
            <input
              type="text"
              placeholder='branch code'
              className="w-[200px] pl-[10px] bg-white p-[3px] rounded-md text-gray-600"
            />
          </div>
          <Link to="add-device" className="bg-black hover:bg-transparent font-semibold py-1 px-5 border border-gray-400 hover:border-gray-400 rounded">
            Add +
          </Link>
        </form>
        <table className=" border-collapse flex-col text-sm bg-gray-800 w-[80vw] rounded-md">

          <tr className="bg-[#44484C] ">
            <td className="py-3 px-4"><input type="checkbox" /></td>
            <td className="py-3 px-4">ID</td>
            <td className="py-3 px-4">Name</td>
            <td className="py-3 px-4">State</td>
            <td className="py-3 px-4">Branch</td>
            <td className="py-3 px-4">Device Model</td>
            <td className="py-3 px-4">API</td>
            <td className="py-3 px-4">Actions</td>
          </tr>


          {devices.map((device, index) => (
            <>
              <tr key={index} >
                <td className="py-3 px-4"><input type="checkbox" /></td>
                <td className="py-3 px-4">{device._id}</td>
                <td className="py-3 px-4">{device.deviceName}</td>
                <td className="py-3 px-4">{device.state}</td>
                <td className="py-3 px-4">{device.branchCode}</td>
                <td className="py-3 px-4">{device.deviceModel}</td>
                <td className="py-3 px-4">{device.api}</td>
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

export default Location