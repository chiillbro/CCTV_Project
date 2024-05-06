import { useState } from 'react';
import { TbCameraSearch } from "react-icons/tb";
import { GoSidebarCollapse } from "react-icons/go";
import AvailableDevices from './AvailableDevices';


const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen &&
        <div
          className='mt-[35vh] right-0 w-[25px] h-[100px] bg-gray-800 flex items-center justify-center border-l border-gray-700 rounded-l-md'
        >
          <TbCameraSearch className="text-[20px] cursor-pointer" onClick={toggleSidebar} />
     
        </div>
      }
      {isOpen &&
        <>
          <div className='fixed mt-[35vh] right-[200px] w-[25px] h-[100px] bg-gray-800 flex items-center justify-center border-l border-gray-700 rounded-l-md '>
            <GoSidebarCollapse className="text-[20px] cursor-pointer" onClick={toggleSidebar} />
          </div>
          <div
            className='mt-[60px] w-[200px] h-[75vh] bg-gray-800 flex flex-col  border-l border-gray-700 rounded-l-md'
          >
            <span className='ml-[20px] text-sm m-[10px]'>Devices</span>
            <input
              type="text"
              placeholder='Search Device'
              className=' rounded-md ml-[10px] text-sm p-[5px] w-[170px] pl-2 text-black'
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <hr className='w-[100%]  mt-[10px] border-gray-700' />
            <div className='flex flex-col gap-[10px] mt-[10px]'>
              <AvailableDevices searchQuery={searchQuery} />
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default SearchBar;