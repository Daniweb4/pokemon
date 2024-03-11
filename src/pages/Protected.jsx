import React from 'react';
import {Outlet,Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux'
const Protected = () => {
    const trainerName=useSelector
    (store=>store.trainerName);
    if(trainerName.length>3){
        return <Outlet/>
    }else{
        return<Navigate to='/'/>
    }
 
}

export default Protected