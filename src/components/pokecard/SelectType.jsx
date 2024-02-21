import React, { useEffect,useRef } from 'react'
import useFetch from '../../hooks/useFetch';
import { setpokemonName } from '../../store/slices/pokemonName..slice';
import  {useDispatch}from 'react-redux'
import '../style/select.css'
const SelectType = ({setSelect}) => {
    const [pokiApi, getPokiApi]=useFetch();
    const dispatch=useDispatch();
    useEffect(() => {
        const url='https://pokeapi.co/api/v2/type/';
        getPokiApi(url);
    }, [])
    const selecData = useRef();

    const handleSelect=()=> {
        setSelect(selecData.current.value);
        dispatch(setpokemonName(''));
    }
    
  return (
    <select  onChange={handleSelect} ref={selecData}>
        <option value='allPokemons'>allPokemons</option>  
        {
            pokiApi?.results.map(type => (
                <option key={type.url}value={type.url}>{type.name}</option> 

            ))
        }
    </select>
  )
}

export default SelectType
