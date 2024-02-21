import React, { useEffect,useState } from 'react'
import useFetch from '../../hooks/useFetch'
import {useNavigate} from 'react-router-dom'
import '../style/pokeCard.css'

const PokeCard = ({url}) => {
    //consumimos la api que tenemos en el hooks
   
    const [pokemo, getPokemo]= useFetch();
    const navigate=useNavigate()
    useEffect(() => {
      getPokemo(url)
    }, []);

    const handleClick=() =>{
      navigate(`/pokedex/${pokemo.id}`)
    }
      
  return (
    <article  className='container3' onClick={handleClick}>
      <div className={pokemo?.types[0].type.name}></div>
      <figure>
      <img src={pokemo?.sprites.other['official-artwork'].front_default}/>
      </figure>
      <h1>{pokemo?.name}</h1>
      <ul className='poke_types'>
      {
        pokemo?.types.map(type =>(
          <li key={type.type.url}  className={`slot${type.slot}`} >{type.type.name}</li>

        ))
      }
      </ul>
      <p>Type</p>
      <hr/>
      <ul className='poke_stats'>
        {
           pokemo?.stats.map(stat =>(
            !stat.stat.name.includes('special')&&
            <li key={stat.stat.url} >{stat.stat.name}<span>{stat.base_stat}</span></li>
  
          ))
        }
      </ul>
    
    </article>
    
   
  )
}

export default PokeCard
