import { FaUser } from "react-icons/fa";
import { logos } from "../../constants";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[8vh] ">
      <img
        src={logos.atticaLogo}
        alt="logo"
        className="w-[8vw] object-contain "
      />
      <div className="flex gap-10 mr-[10vw]">
        <FaUser className="text-2xl cursor-pointer hover:-translate-y-1 transition-all" />
        <AiOutlineLogout className="text-2xl cursor-pointer hover:-translate-y-1 transition-all" />
      </div>
    </div>
  );
};

export default Navbar;
