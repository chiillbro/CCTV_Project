import img1 from "../../assets/homepageicon/crm.jpg";
import img2 from "../../assets/homepageicon/live.jpg";
import img3 from "../../assets/homepageicon/database.jpg";
import img4 from "../../assets/homepageicon/face_scanning.jpg";
import img5 from "../../assets/homepageicon/register.png";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import './dashboard.css'
// import { useNavigate } from "react-router";

const Dashboard = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/dashboard/crm");
  // };
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex items-center justify-center mt-[15vh] ">
        <div className="parent width-full h-full grid md: grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-20">
          <Link 
          to='/dashboard/crm'
          className="child"
          >
            <img src={img1} alt="CRM" className="rounded-md" />
            <span className="">CRM</span>
          </Link>
          <Link to="/dashboard/live-stream" className="child">
            <img src={img2} alt="CRM" className="rounded-md"/>
            <span className="">Live Stream</span>
          </Link>
          <Link to="" className="child">
            <img src={img3} alt="CRM" className="rounded-md" />
            <span className="">Database</span>
          </Link>
          <Link to="" className="child">
            <img src={img4} alt="CRM" className="rounded-md" />
            <span className="">Face Recognition</span>
          </Link>
          <Link to="/register" className="child">
            <img src={img5} alt="CRM" className="rounded-md" />
            <span className="">Agent Reg.</span>
          </Link >
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
