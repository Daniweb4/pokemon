import React, { useEffect, useRef, useState } from 'react'
import {useSelector,useDispatch}from 'react-redux'
import { setpokemonName } from '../store/slices/pokemonName..slice';
import useFetch from '../hooks/useFetch';
import PokeCard from '../components/pokecard/PokeCard';
import SelectType from '../components/pokecard/SelectType';
import '../components/style/pokedexCard.css'

const PokedexCard = () => {
  const [select, setSelect] = useState('allPokemons')
  const trainerName=useSelector(store=>store.trainerName);
  const pokemonName=useSelector(store=>store.pokemonName);
  const pokeInput= useRef();
  const dispatch=useDispatch()
  
  const [pokemon,getPokemon,getPerSelect]=useFetch();
  useEffect(() => {
    if (select==='allPokemons') {
      const url=' https://pokeapi.co/api/v2/pokemon/?limit=50';
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

  
  
  
  return (
    <div className='container2'>
      <section className='pokedex1'>
      <img></img>
      <h3 className='dato'>Bienvenido <span>{trainerName} aqui podras encontrar tu pokemon</span></h3>
      <div>
      <form onSubmit={handleSubmit}>
      <input  className='pokedinput'ref={pokeInput} id='text' type='text' />
      <button className='pokedbtn'>Buscar</button>
      </form>
      <SelectType
      setSelect={setSelect}
      />
      </div>
      </section>
      <section className='poke_container'>
        {
          cbFilter()?.map(poke=>(
            <PokeCard
            key={poke.url}
            url={poke.url}
            
            />
            
          ))
        }
      </section>

      
    </div>
  )
}

export default PokedexCard
