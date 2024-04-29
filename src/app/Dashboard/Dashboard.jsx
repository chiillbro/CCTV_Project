import img1 from "../../assets/homepageicon/crm.jpg";
import img2 from "../../assets/homepageicon/live.jpg";
import img3 from "../../assets/homepageicon/database.jpg";
import img4 from "../../assets/homepageicon/face_scanning.jpg";
import img5 from "../../assets/homepageicon/register.png";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {

  return (
    <div className="h-screen w-screen">
      <Navbar/>

      <div className="width-full h-full grid md: grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        <div className="lg:w-[150px] lg:h-[200px] md md:h-150px">
          <img src={img1} alt="CRM" className="overflow-hidden" />
          <span className="">CRM</span>
        </div>
        {/* <a href="/homepage" className="flex flex-col items-center justify-center">
        <img src={img2} alt="Live Streaming" className="" />
        <span className="font-semibold text-base">Live Stream</span>
        </a>
        <div className="flex flex-col items-center justify-center">
        <img src={img3} alt="Data" className="" />
        <span className="">Database</span>
        </div>
        
        <div className="flex flex-col items-center justify-center">
        <img src={img4} alt="Face-Recognition" className="" />
        <span className="">Face-Recognition</span>
        </div>
        <div className="">
        <img src={img5} alt="Register" className="flex flex-col items-center justify-center" />
        <span className="">Agent Reg.</span>
      </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
