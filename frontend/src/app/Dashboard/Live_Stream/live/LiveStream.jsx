import { useState } from "react";
import { rtspUrl } from "./RtspUrl";
import img1 from "../../../../assets/gridIcons/1.png"
import img2 from "../../../../assets/gridIcons/2.png"
import img3 from "../../../../assets/gridIcons/3.png"
import img4 from "../../../../assets/gridIcons/4.png"
import img5 from "../../../../assets/gridIcons/5.png"

const LiveStream = () => {

  const [grid, setGrid] = useState(25);
  const [selectedCamera, setSelectedCamera] = useState(1);

  const handleGrid = (e) => {
    setGrid(e)
  }

  const imageStyle = {
    filter: `'grayscale(0%)' : 'grayscale(100%)',`
  };

  console.log(selectedCamera)

  const renderCamera = () => {
    if (!selectedCamera) {
      return rtspUrl.slice(0, grid).map((cam, index) => (
        <div
          key={index}
          className="bg-gray-700 text-white border-1px border-gray-700 rounded-md p-[5px] m-[5px] text-[10px]"
          onDoubleClick={() =>
            setSelectedCamera(index+1)
          }
        >{index + 1}</div>
      ))
    } else {
      return rtspUrl.filter((url, index) => (index+1 === selectedCamera)).map((url, index) => (
        <div
          key={index}
          className="bg-gray-700 text-white border-1px border-gray-700 rounded-md p-[5px] m-[5px]"
          onDoubleClick={() =>
            setSelectedCamera(null)
          }
        >{selectedCamera}</div>
      ))
    }
  }
  console.log(grid)

  return (
    <div className="flex flex-col m-5 w-full gap-3">
      <span className="text-1xl ">
        Live Stream
      </span>

      <div
        className={`grid h-full w-full 
          ${grid === 1 && selectedCamera === null && "grid-cols-1 grid-rows-1"}
          ${grid === 4 && selectedCamera === null && "grid-cols-2 grid-rows-2"}
          ${grid === 9 && selectedCamera === null && "grid-cols-3 grid-rows-3"}  
          ${grid === 16 && selectedCamera === null && "grid-cols-4 grid-rows-4"}
          ${grid === 25 && selectedCamera === null && "grid-cols-5 grid-rows-5"}
        `}
      >

        {renderCamera()}

      </div>

      <div className="flex gap-7 items-center justify-evenly w-[35px] ">
        <span className="text-gray-400">Layout</span>

        <img
          src={img5}
          alt="grid"
          onClick={() => handleGrid(1)}
          style={grid === 1 ? imageStyle : {}}
          className="cursor-pointer"
        />
        <img
          src={img2}
          alt="grid"
          style={grid === 4 ? imageStyle : {}}
          onClick={() => handleGrid(4)}
          className="cursor-pointer"
        />
        <img
          src={img1}
          alt="grid"
          style={grid === 9 ? imageStyle : {}}
          onClick={() => handleGrid(9)}
          className="cursor-pointer"
        />
        <img
          src={img3}
          alt="grid"
          style={grid === 16 ? imageStyle : {}}
          onClick={() => handleGrid(16)}
          className="cursor-pointer"
        />
        <img
          src={img4}
          alt="grid"
          style={grid === 25 ? imageStyle : {}}
          onClick={() => handleGrid(25)}
          className="cursor-pointer"
        />
      </div>
    </div>
  )

};

export default LiveStream;