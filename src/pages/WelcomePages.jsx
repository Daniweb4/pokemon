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
      
      <img className='img2' src='https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jYOViXUwNHqR0diMPOoLle7b-YDcj8zVF4YQwQYeFuHZkMM0M~SEr6KESa18ScWi9SrpImAeaqRMAAprxfYnqH72R2uijZthu5Ivs8rMMVW37KedYYlYY40-aQWJsN3cU9A67Y76wFQ8cKT8IL~dNdcZgKhdJ65EX~0yH-GFxtZoNyUcZHd1xdY5Dl6JP~LDgtW6Ixu3phoQBg-TD27LB5tt~u5AkA-l9-zsC8CvRhuegs635Qqk~D9VdDHneHSzzojTrEh6Yy4lsvf7Qz1m0u5OWnkEyLOj~-P4Zr~ZWRF3oAbRbsmXgSFdJUG-r5C7Cv6GjJ~3KJYi~SU-fU1ycQ__'/>
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
