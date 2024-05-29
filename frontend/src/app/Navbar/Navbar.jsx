import { FaUser } from "react-icons/fa";
import { logos } from "../../constants";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApi";
import { logout } from "../../redux/features/auth/authSlice"

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex items-center justify-between h-[8vh]  bg-gray-800 pl-[10px] pr-[10px] border-b border-l border-gray-700">
      <Link
        to='/dashboard'
      >
        <img
          src={logos.atticaLogo}
          alt="logo"
          className="w-[8vw] object-contain "
        />
      </Link>
      <div className="flex gap-10 mr-[10vw]">
        <Link
          to="/profile"
        >
          <FaUser className="text-2xl cursor-pointer hover:-translate-y-1 transition-all" />
        </Link>
        <AiOutlineLogout
          onClick={handleLogout}
          className="text-2xl cursor-pointer hover:-translate-y-1 transition-all"
        />
      </div>
    </div>
  );
};

export default Navbar;
