import React, { useEffect, useRef, useState } from 'react'
import {useSelector,useDispatch}from 'react-redux'
import { setpokemonName } from '../store/slices/pokemonName..slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokecard/PokeCard';
import SelectType from '../components/pokecard/SelectType';
import '../components/style/pokedexCard.css'
import PaginacionPoke from './PaginacionPoke'

const PokedexCard = () => {
 
  const [select, setSelect] = useState('allPokemons')
  const trainerName=useSelector(store=>store.trainerName);
  const pokemonName=useSelector(store=>store.pokemonName);
  const pokeInput= useRef();
  const dispatch=useDispatch()
  const [currentPagi, setcurrentPagi] = useState(1)
  
  const [pokemon,getPokemon,getPerSelect]=useFetch();
  useEffect(() => {
    if (select==='allPokemons') {
      const url=` https://pokeapi.co/api/v2/pokemon/?limit=30`;
      getPokemon(url)
      
    }else{
      getPerSelect(select);
    } 
  }, [select])
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(setpokemonName(pokeInput.current.value.trim().
    toLowerCase()));
    


  }
 
  //console.log(pokemon)
  const cbFilter=()=>{
    if (pokemonName){
      return pokemon.results.filter(item => item.name.
        includes(pokemonName));
    }else{
      return pokemon?.results;
    }
   
    
  }

  

  //paginacion
  //se realiza un corto cicuito
  //esta primera variable esl la cantidad de elelmento por pagina
  const quantity=8;
  //este es la pagina en la que estoy por lo que hay
  const second=currentPagi*quantity;
  //este ultimo es elcontenido que se va a mostrar
  const first=second-quantity;
  ////se realiza un corto cicuito
  const residentPart=cbFilter() && cbFilter().slice(first,second)
  //total de pagina y se realiza otro corto circuito
  const total=cbFilter() && Math.floor(cbFilter().length/quantity)+1;
  
  
  return (
    <div className='container2'>
      <img className='img3' src='https://s3-alpha-sig.figma.com/img/ca59/d9ce/98042af437fdff212d3259040db2e2db?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hNCQVLq~HPorbBWb4rEkOqie9smUE1HY8Cb4c0U-Od6iZufMAZQNm-kiHFau1sqvWbnuMDqz00XxvpeDx~upL99yrN~mm71CmS9y2lUfh-5-E6P9ydl-~alyCUW9x5XdGWzzV9Kb9BBrelRjmN~NOUYOvT3RbcLlNmaZ5QklXVBgRWz3vZLIOgWCltdQlsJLJu6kMNl8WbPk8ILz5rdqjOpSWIsMhSWXu2MUZFeEidcdtlBDB5kdEqceNZciCZdO5e9SHTDjWlZZUYqzNE82UFMSIJlWqUPHagbWFrnBogtYWDdrJTpm~cmwsTL8RCPZjAnWMZscgB0yOGCIi8jKSg__'/>
      <section className='pokedex1'>
      <img></img>
      <h3 className='dato'>Bienvenido <span className='name_pokemon'>{trainerName} </span>aqui podras encontrar tu pokemon</h3>
      <div>
      <form onSubmit={handleSubmit}>
      <input  className='pokedinput'ref={pokeInput} id='text' type='text' />
      <button className='pokedbtn'>Buscar</button>
      </form>
      < PaginacionPoke
            currentPagi={currentPagi}
            setcurrentPagi={setcurrentPagi}
            total={total}
        
        /> 
      <SelectType
      setSelect={setSelect}
      />
      </div>
      </section>
      <section className='poke_container'>
        {
          residentPart?.map(poke=>(
            <PokeCard
            key={poke.url}
            url={poke.url}
            
            />
            
          ))
        }
           
         
      </section>
      <br></br>
     
      < PaginacionPoke
            currentPagi={currentPagi}
            setcurrentPagi={setcurrentPagi}
            total={total}
        
        /> 
     
      
    </div>
  )
}

export default PokedexCard
