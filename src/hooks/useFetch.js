import { useState } from "react"
import axios from 'axios'

const useFetch = () => {
 const[apiData,setData]= useState();
 const getApi=(url)=>{
    axios.get(url)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
 }
 const getApiSelect=(url)=>{
   axios.get(url)
   .then(res=>{
      setData({
         results:res.data.pokemon.map(poke=>poke.pokemon)
      });
   })
   .catch(err=>console.log(err));
}
 return[apiData,getApi,getApiSelect]
}

export default useFetch;
