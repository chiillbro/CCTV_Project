import { useNavigate } from "react-router";
import { logos } from "../../constants";

const RegisterAgent = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    navigate("/dashboard");
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
        {/* <img
          src={logos.goldBars}
          alt="logo"
          className="w-[100vw] h-[30vh] absolute bottom-[1px] left-[1px] object-cover opacity-50 rounded-md"
        /> */}
      </div>
      <div className="h-[80vh] w-[20vw] ml-[30vw] flex gap-6 flex-col ">
        <h1 className=" text-2xl">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              // placeholder="Enter your email"
              className="w-full  rounded-md p-2 text-black"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              // placeholder="Enter your username"
              className="w-full  rounded-md p-2 text-black"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="employeeId">EmployeeId</label>
            <input
              type="text"
              id="employeeId"
              // placeholder="Enter your employeeId"
              className="w-full  rounded-md p-2 text-black"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              // placeholder="Enter your Password"
              className="w-full rounded-md p-2 text-black"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              // placeholder="Re-enter your Password"
              className="w-full rounded-md p-2 text-black"
            />
          </div>

          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterAgent;
