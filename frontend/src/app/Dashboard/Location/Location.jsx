import React from 'react'
import Navbar from '../../Navbar/Navbar'
import DeviceDetails from '../Live_Stream/deviceList/DeviceDetails';
import { FaEye } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const Location = () => {
  const [state, setState] = React.useState('')
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
              onClick={(e) => setState(e.target.value)}
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
          <button className="bg-black hover:bg-transparent font-semibold py-1 px-5 border border-gray-400 hover:border-gray-400 rounded">
            Add +
          </button>
        </form>
        <table className=" border-collapse flex-col text-sm bg-gray-800 w-[80vw] rounded-md">

          <tr className="bg-[#44484C] ">
            <td className="py-3 px-4"><input type="checkbox" /></td>
            <td className="py-3 px-4">No</td>
            <td className="py-3 px-4">Name</td>
            <td className="py-3 px-4">State</td>
            <td className="py-3 px-4">Branch</td>
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
                <td className="py-3 px-4">{device.branch}</td>
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

export default Location