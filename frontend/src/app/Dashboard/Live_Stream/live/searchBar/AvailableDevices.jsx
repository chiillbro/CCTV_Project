import { rtspUrl } from '../RtspUrl'

const AvailableDevices = ({searchQuery}) => {

  const filteredUrls = rtspUrl.filter((url) =>
    url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='flex flex-col gap-[5px] h-[60vh] overflow-y-auto m-[10px]'>
      {filteredUrls.map((url,index)=>(
        <span className='text-sm m-[10px]' key={index}>{url}</span>
      ))}
    </div>
  )
}

export default AvailableDevices