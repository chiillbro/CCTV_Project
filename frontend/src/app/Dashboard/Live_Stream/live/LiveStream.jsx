import { useState } from "react";
import { rtspUrl } from "./RtspUrl"; // Assumes rtspUrl is an array of RTSP URLs
import img1 from "../../../../assets/gridIcons/1.png";
import img2 from "../../../../assets/gridIcons/2.png";
import img3 from "../../../../assets/gridIcons/3.png";
import img4 from "../../../../assets/gridIcons/4.png";
import img5 from "../../../../assets/gridIcons/5.png";
import SearchBar from "./searchBar/SearchBar";

const LiveStream = () => {
  const [grid, setGrid] = useState(25); // State for grid layout (number of cameras displayed)
  const [selectedCamera, setSelectedCamera] = useState(null); // State for selected camera
  const [currentPage, setCurrentPage] = useState(1); // State for pagination
  const camerasPerPage = grid; // Number of cameras per page based on grid layout
  const totalPages = Math.ceil(rtspUrl.length / camerasPerPage);

  const handleGrid = (e) => {
    setGrid(e);
    setCurrentPage(1); // Reset to the first page when grid layout changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const imageStyle = {
    filter: "grayscale(0%)",
  };

  const renderCamera = () => {
    const startIndex = (currentPage - 1) * camerasPerPage;
    const selectedCameras = rtspUrl.slice(startIndex, startIndex + camerasPerPage);

    if (!selectedCamera) {
      return selectedCameras.map((cam, index) => (
        <div
          key={index}
          className="bg-gray-700 text-white border border-gray-700 rounded-md p-[5px] m-[5px] text-[10px]"
          onDoubleClick={() => setSelectedCamera(startIndex + index + 1)}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <iframe
            src={cam}
            className="absolute inset-0 w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      ));
    } else {
      return rtspUrl
        .filter((url, index) => index + 1 === selectedCamera)
        .map((url, index) => (
          <div
            key={index}
            className="bg-gray-700 text-white border border-gray-700 rounded-md p-[5px] m-[5px]" 
            onDoubleClick={() => setSelectedCamera(null)}
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <iframe
              src={url}
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        ));
    }
  };

  const renderPagination = () => {
    const paginationButtons = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (totalPages > 5) {
      if (startPage <= 3) {
        endPage = 5;
      } else if (endPage >= totalPages - 2) {
        startPage = totalPages - 4;
      }
      if (startPage > 1) {
        paginationButtons.push(
          <li key="start-ellipsis">
            <button
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled
            >
              ...
            </button>
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <li key={i}>
          <button
            onClick={() => handlePageChange(i)}
            className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === i
              ? "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              : "text-gray-500 bg-white"
              }`}
          >
            {i}
          </button>
        </li>
      );
    }

    if (totalPages > 5 && endPage < totalPages) {
      paginationButtons.push(
        <li key="end-ellipsis">
          <button
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            disabled
          >
            ...
          </button>
        </li>
      );
    }

    return (
      <nav aria-label="Page navigation example">
        <ul className="flex items-center -space-x-px h-8 text-sm  mr-[5px]">
          <li>
            <button
              onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : 1)}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
          </li>
          {paginationButtons}
          <li>
            <button
              onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : totalPages)}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <>
      <div className="flex flex-col m-5 w-full gap-3">
        <span className="text-1xl">Live Stream</span>

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

        <div className="flex gap-7 items-center justify-between">
          <div className="flex gap-7 items-center justify-evenly w-[35px]">
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
          <div>
            {renderPagination()}
          </div>
        </div>


      </div>
      <SearchBar />
    </>
  );
};

export default LiveStream;


