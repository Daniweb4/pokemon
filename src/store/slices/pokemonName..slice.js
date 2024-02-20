import {createSlice} from '@reduxjs/toolkit';

const pokemonNameSlice= createSlice({
  name:'pokemonName',
  initialState:'',
  reducers:{
    setpokemonName:(currentValue,action)=>action.payload,
  }

});
export const {setpokemonName}=pokemonNameSlice.actions;
export default pokemonNameSlice.reducer;