import React from 'react'
import {Outlet} from 'react-router-dom'
import HeaderList from '../components/Shared/HeaderList'
const NavBarPage = () => {
  return (
    <div>
       <HeaderList/>
        <Outlet/>
      
    </div>
  )
}

export default NavBarPage
