import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import {useParams} from 'react-router-dom'
import '../components/style/pokeId.css'
const PokedexId = () => {
  const [pokeData, getPokeData]=useFetch();
  const param = useParams();
  
  useEffect(() => {
    const url=`https://pokeapi.co/api/v2/pokemon/${param.Id}`;
    getPokeData(url);
    
  }, [])
  console.log(pokeData)
  return (
    <article  className='container4'>
      <div className={pokeData?.stats[0].stat.base_stat}></div>
    <div>
    <figure>
      <img src={pokeData?.sprites.other['official-artwork'].front_default}/>
    </figure>
     <p>#{pokeData?.id}</p>
     <hr /><h2>{pokeData?.name}</h2> 
     <div className='weight_height'>
       <h4>Peso:  {pokeData?.weight}</h4>
       <h4>Altura:  {pokeData?.height}</h4>
     </div>
     <div className='type'>
     <p className='tipo'>Type</p>
      <ul className='poke_typ'>
      {
        pokeData?.types.map(type =>(
          <li key={type.type.url}  className={`slot${type.slot}`} >{type.type.name}</li>

        ))
      }</ul>
      </div >
       <div className='ability'>
       <p className='tip'>Habilidades</p>
        {
          pokeData?.abilities.map(abiliti =>(
            <li className={`slot${abiliti.slot}`}>{abiliti.ability.name}</li>

          ))

        }
        </div>
      
      <hr/>
      <p className='stat'>Stats</p>
      <ul className='pok_stat'>
        {
           pokeData?.stats.map(stat =>(
            !stat.stat.name.includes('special')&&
            <li key={stat.stat.url} >{stat.stat.name}<span>{stat.base_stat}</span></li>
            
          ))
        }
       
      
      </ul>
    </div>
    </article>
  )
}

export default PokedexId