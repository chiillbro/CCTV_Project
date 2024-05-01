import { useState } from "react";
import { BiCameraHome } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWorkHistory } from "react-icons/md";

const Sidebar = () => {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  return (
    <div
      className={`
      flex flex-col justify-items-start  h-screen  pt-[15px] gap-[40px] bg-[#279DE1] w-[60px]
      ${hamburgerClicked ? 'w-[200px]' : 'w-[60px]'}`
      }
    >
      <div className="flex justify-center">
        <GiHamburgerMenu
          className=" text-2xl cursor-pointer"
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        />
      </div>

      <div className="flex flex-col gap-[20px]">
        <div
          className="flex justify-items-start gap-[20px] items-center ml-[20px]"
        >
          <BiCameraHome
            className="text-[22px] "
          />
          {hamburgerClicked && <span className="text-1xl text-[#1A1932]">Home</span>}
        </div>
        <div
          className="flex justify-items-start gap-[20px] items-center ml-[20px]"
        >
          <MdDashboard className="text-[22px]" />
          {hamburgerClicked && <span className="text-1xl text-[#1A1932]">Dashboard</span>}
        </div>
        <div
          className="flex justify-items-start gap-[20px] items-center ml-[20px]"
        >
          <MdLiveTv className="text-[22px]" />
          {hamburgerClicked && <span className="text-1xl text-[#1A1932]">Live camera</span>}
        </div>
        <div
          className="flex justify-items-start gap-[20px] items-center ml-[20px]"
        >
          <BiCctv className="text-[22px]" />
          {hamburgerClicked && <span className="text-1xl text-[#1A1932]">Devices</span>}
        </div>
        <div
          className="flex justify-items-start gap-[20px] items-center ml-[20px]"
        >
          <MdOutlineWorkHistory className="text-[22px]" />
          {hamburgerClicked && <span className="text-1xl text-[#1A1932]">Playback</span>}
        </div>
        <div
          className="flex justify-items-start gap-[20px] items-center ml-[20px]"
        >
          <IoSettingsOutline className="text-[22px]" />
          {hamburgerClicked && <span className="text-1xl text-[#1A1932]">Settings</span>}
        </div>
      </div>
    </div>
  )
}

export default Sidebar