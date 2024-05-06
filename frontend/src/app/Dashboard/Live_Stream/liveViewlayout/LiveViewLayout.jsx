import Navbar from '../../../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/Sidebar.jsx'

const LiveViewLayout = () => {

  return (

    <div className='flex flex-col h-screen w-screen'>
      <div>
        <Navbar />
      </div>
      <div className='flex h-[92vh] w-[100vw] gap-[10px]'>
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default LiveViewLayout