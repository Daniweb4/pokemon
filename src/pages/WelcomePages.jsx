import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName..slice';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const WelcomePage = () => {

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const textInput=useRef();
  const handelSubmit=(event)=>{
    event.preventDefault();
    dispatch(setTrainerName(textInput.current.value.trim()));
    navigate('/pokedex');
  }
  return (
    <section className='container'>
      
      <img className='img2' src='https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iRm6vCpmOAn20ysvawHlB7ERW2ZMFUUkbtda2y17qGtEq3E-8lOwGuct5rFCJosRRTBsCvvE033UJH2iVoXCr1IUYwRgBbNKXbK9KQTWZwNgxzlCyVOWs9q6hxJ6mzNj9UewW3IcM0b80LYopqHH0V2cH7TFcpeskFvUjN3tRiCIYoByY2gjNS9gEIJgJjDWGNM6LXV1-EeKiLCzC~AKGxsadyIj53LlJ1i5rrL7nC03w7xi2u0j8S1WS2JyZStL4xPus0J0FYa4PUrD9M7RC5xFSqqhRub35cJmLnM1LzMbDhyJNO~JQY7qppJl-ThCH-evNAkgg-kdI0vhMZ1ZGw'/>
         <h1 className='welcome'>¡Hola entrenador!</h1>
         <p className='data'>Para poder comenzar dame tu nombre</p>
         <form className='form1' onSubmit={handelSubmit}>
        <input required placeholder='Ingresa tu nombre' className='text1' ref={textInput} id='text' type='text' />
        <button className='btn1'>Comenzar</button>
        </form>
        <div className='footer_father' >
        <div className='footer_red' ></div>
        <div className='footer_circle_father' >
        <div className='footer_circle2' ></div>
        <div className='footer_circle1' ></div>
        </div>
        
        <div className='footer_black' ></div>

        </div>
      
        
     
      
      
     
     
      </section>
      
      

     
     

    
  )
}

export default WelcomePage;
