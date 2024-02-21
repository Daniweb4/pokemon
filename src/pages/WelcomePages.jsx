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
      
      <img className='img2' src='https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hNCQVLq~HPorbBWb4rEkOqie9smUE1HY8Cb4c0U-Od6iZufMAZQNm-kiHFau1sqvWbnuMDqz00XxvpeDx~upL99yrN~mm71CmS9y2lUfh-5-E6P9ydl-~alyCUW9x5XdGWzzV9Kb9BBrelRjmN~NOUYOvT3RbcLlNmaZ5QklXVBgRWz3vZLIOgWCltdQlsJLJu6kMNl8WbPk8ILz5rdqjOpSWIsMhSWXu2MUZFeEidcdtlBDB5kdEqceNZciCZdO5e9SHTDjWlZZUYqzNE82UFMSIJlWqUPHagbWFrnBogtYWDdrJTpm~cmwsTL8RCPZjAnWMZscgB0yOGCIi8jKSg__'/>
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
