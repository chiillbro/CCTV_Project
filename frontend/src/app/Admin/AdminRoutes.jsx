import {useSelector} from 'react-redux'
import { Outlet } from 'react-router'

const AdminRoutes = () => {
  const {userInfo} = useSelector(state=>state.auth)
  return userInfo && userInfo.isAdmin && <Outlet /> 
}

export default AdminRoutes