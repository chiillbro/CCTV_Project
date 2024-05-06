import { useState } from "react";
import { Link } from "react-router-dom"; 
import { BiCameraHome } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`
      flex flex-col justify-items-start h-full pt-[15px] gap-[40px] bg-gray-800
      ${hamburgerClicked ? 'w-[200px]' : 'w-[60px]'}`
        }
      >
        <div className="flex justify-center">
          <GiHamburgerMenu
            className=" text-2xl cursor-pointer"
            onClick={() => setHamburgerClicked(!hamburgerClicked)}
          />
        </div>

        <div className="flex flex-col gap-[15px]">
          <div
            className="flex justify-items-start gap-[20px] items-center ml-[10px] hover:bg-gray-700 p-[10px]"
          >
            <BiCameraHome
              className="text-[22px] "
            />
            {hamburgerClicked && <span className="text-1xl ">Home</span>}
          </div>
          <div
            className="flex justify-items-start gap-[20px] items-center ml-[10px]  hover:bg-gray-700 p-[10px]"
          >
            <MdDashboard className="text-[22px]" />
            {hamburgerClicked && <span className="text-1xl ">Dashboard</span>}
          </div>
          <Link
          to="/dashboard/live-stream/stream"
            className="flex justify-items-start gap-[20px] items-center ml-[10px]  hover:bg-gray-700 p-[10px]"
          >
            <MdLiveTv className="text-[22px]" />
            {hamburgerClicked && <span className="text-1xl">Live Stream</span>}
          </Link>
          <Link
            to="/dashboard/live-stream/devices"
            className="flex justify-items-start gap-[20px] items-center ml-[10px] hover:bg-gray-700 p-[10px]"
          >
            <BiCctv className="text-[22px]" />
            {hamburgerClicked && <span className="text-1xl ">Devices</span>}
          </Link>
          <div
            className="flex justify-items-start gap-[20px] items-center ml-[10px] hover:bg-gray-700 p-[10px]"
          >
            <MdOutlineWorkHistory className="text-[22px]" />
            {hamburgerClicked && <span className="text-1xl ">Playback</span>}
          </div>
          <div
            className="flex justify-items-start gap-[20px] items-center ml-[10px] hover:bg-gray-700 p-[10px]"
          >
            <IoSettingsOutline className="text-[22px]" />
            {hamburgerClicked && <span className="text-1xl ">Settings</span>}
          </div>
        </div>
      </div>
      <IoReturnUpBackOutline
        onClick={() => navigate("/dashboard")}
        className={`w-8 h-8 hover:-translate-y-1 transition cursor-pointer absolute z-10 bottom-[50px] 
${hamburgerClicked ? "left-[75px]" : "left-[15px]"}
      `}
      />
    </>
  )
}

export default Sidebar