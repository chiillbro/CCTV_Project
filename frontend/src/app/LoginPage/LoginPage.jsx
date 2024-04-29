import { useLocation, useNavigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import { logos } from "../../constants";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../redux/api/usersApi";
import { setCredentials } from "../../redux/features/auth/authSlice";

import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();

  const sp = new URLSearchParams(search);

  const redirect = sp.get("redirect") || "/dashboard";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
      toast.success("Login successful");
    } catch (error) {
      console.log(error);
      toast.error(error.data?.message || error.message);
    }
  };
  return (
    <div
      className={`flex items-center justify-center h-screen w-full  gap-10 relative overflow-hidden`}
    >
      <div>
        <img
          src={logos.atticaLogo}
          alt="logo"
          className="w-[300px] lg:w-[400px] xl:w-[500px] absolute top-[200px] left-[10%] "
        />
        <img
          src={logos.goldBars}
          alt="logo"
          className="w-[100vw] h-[30vh] absolute bottom-[1px] left-[1px] object-cover opacity-50 rounded-md"
        />
      </div>
      <div className="h-[70vh] w-[20vw] ml-[30vw] flex gap-10 flex-col ">
        <h1 className=" text-2xl">Log In</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full  rounded-md p-2 text-black"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="w-full rounded-md p-2 text-black"
            />
          </div>

          <button className="btn btn-neutral mt-6">
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
