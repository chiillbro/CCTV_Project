import { BiCameraHome } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { BiCctv } from "react-icons/bi";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2   ml-16 mt-12 gap-[50px] overflow-hidden ">
        <Link
          className="bg-gray-800 p-4 flex rounded-md md:w-[250pxs] lg:w-[20vw] h-[130px] gap-[40px] items-center cursor-pointer  "
          to="/dashboard/live-stream/stream"
          >
          <BiCameraHome
            className="text-[60px] "
          /> <span className='text-[21px]'>Live view</span>
        </Link>
        <Link 
        className="bg-gray-800 p-4 flex rounded-md md:w-[250pxs] lg:w-[20vw] h-[130px] gap-[40px] items-center cursor-pointer  "
        to="/dashboard/live-stream/play-back"
        >
          <MdLiveTv
            className="text-[60px] "
          /> <span className='text-[21px]'>Play Back</span>
        </Link>
        <Link 
        className="bg-gray-800 p-4 flex rounded-md md:w-[250pxs] lg:w-[20vw] h-[130px] gap-[40px] items-center cursor-pointer "
        to="/dashboard/live-stream/user"
        >
          <BiCctv
            className="text-[60px] "
          /> <span className='text-[21px]'>User Account</span>
        </Link>
        <Link 
        className="bg-gray-800 p-4 flex rounded-md md:w-[250pxs] lg:w-[20vw] h-[130px] gap-[40px] items-center cursor-pointer  "
        to="/dashboard/live-stream/devices"        >
          < BiSolidUserAccount
            className="text-[60px] "
          /> <span className='text-[21px]'>Devices</span>
        </Link>
        <Link 
        className="bg-gray-800 p-4 flex rounded-md md:w-[250pxs] lg:w-[20vw] h-[130px] gap-[40px] items-center cursor-pointer"
        to="/dashboard/live-stream/settings"
        >
          <IoSettingsOutline
            className="text-[60px] "
          /> <span className='text-[21px]'>Settings</span>

        </Link>
      </div>
    </div>
  )
}

export default Home