import { FaUser } from "react-icons/fa";
import { logos } from "../../constants";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../../redux/api/usersApi";
import { logout } from "../../redux/features/auth/authSlice";

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
    <div className="flex items-center justify-between h-[8vh] ">
      <img
        src={logos.atticaLogo}
        alt="logo"
        className="w-[8vw] object-contain "
      />
      <div className="flex gap-10 mr-[10vw]">
        <FaUser className="text-2xl cursor-pointer hover:-translate-y-1 transition-all" />
        <AiOutlineLogout
          onClick={handleLogout}
          className="text-2xl cursor-pointer hover:-translate-y-1 transition-all"
        />
      </div>
    </div>
  );
};

export default Navbar;
