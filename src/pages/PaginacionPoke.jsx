import React from 'react'
import '../components/style/paginacion.css'
const PaginacionPoke = ({currentPagi,setcurrentPagi,total}) => {
    const handlePrev=()=>{
        if (currentPagi>1) {
         setcurrentPagi(currentPagi-1)
        }
     }
    const handleNext=()=>{
        if (currentPagi<total) {
            setcurrentPagi(currentPagi+1) 
           }    
        }
  return (
    <div className='container_paginacion'>
      <button onClick={handlePrev}>Prev</button>
        <span>{`${currentPagi}/ ${total}`}</span>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default PaginacionPoke
