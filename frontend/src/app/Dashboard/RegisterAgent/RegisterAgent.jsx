import { useNavigate } from "react-router";
import { logos } from "../../../constants";
// import { useEffect, useState } from "react";

// import { useSelector } from "react-redux";
import { useRegisterMutation } from "../../../redux/api/usersApi";
import { toast } from "react-toastify";
import { useState } from "react";

const RegisterAgent = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [state, setState] = useState("")
  const [designation, setDesignation] = useState("")
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // const {userInfo} = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  // useEffect(() => {

  //   if (userInfo) {
  //     navigate('/login')
  //   }
  // }, [navigate, userInfo])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        await register({
          email,
          username,
          employeeId,
          state,
          designation,
          password,
          confirmPassword
        }).unwrap()
        navigate("/dashboard/userlist");
        toast.success("Registration successful");
      } catch (error) {
        console.log(error);
        toast.error(error.data?.message || error.message);
      }
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
      </div>
      <div className="h-[80vh] w-[20vw] ml-[30vw] flex gap-6 flex-col ">
        <h1 className=" text-2xl">Agent Registration</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // placeholder="Enter your email"
              className="w-full  rounded-md p-2 text-black bg-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // placeholder="Enter your username"
              className="w-full  rounded-md p-2 text-black bg-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="employeeId">EmployeeId</label>
            <input
              type="text"
              id="employeeId"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              // placeholder="Enter your employeeId"
              className="w-full  rounded-md p-2 text-black bg-white"
            />
          </div>
          <div className="flex justify-center gap-4 ">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="state">State</label>
            <select
              className="w-full rounded-md p-2 text-black bg-white"
              name=""
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="">Select a state</option>
              <option value="KA">Karnataka</option>
              <option value="TN">Tamilnadu</option>
              <option value="AP">Andhra Pradesh</option>
              <option value="TN">Telangana</option>
              <option value="KE">Kerala</option>
            </select>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="designation">Designation</label>
            <select
              className="w-full rounded-md p-2 text-black bg-white"
              name=""
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            >
              <option value="">Select a designation</option>
              <option value="agent">Agent</option>
              <option value="subAgent">Sub Agent</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // placeholder="Enter your Password"
              className="w-full rounded-md p-2 text-black bg-white"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              // placeholder="Re-enter your Password"
              className="w-full rounded-md p-2 text-black bg-white"
            />
          </div>

          <button className="btn btn-neutral mt-4">
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterAgent;
