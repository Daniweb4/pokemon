import React from 'react';
import {Outlet,Navigate} from 'react-router-dom';

const ProtectedRoute = ({login}) => {
   
   const {name}=login;
   if(name === 'Danilo'){
    return <Outlet/>
   }else{
    return <Navigate to='/'/>
   }
  
  /*return (
    <div>
        <h1>Protected</h1>
    </div>
  )*/
}

export default ProtectedRoute;
