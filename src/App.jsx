import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import WelcomePage from './pages/WelcomePages'
import PokedexCard from './pages/PokedexCard'
import PokedexId from './pages/PokedexId'
import Protected from './pages/Protected'
function App() {
 
  
  return (
    <div>
      
      <Routes> 
      <Route path='/' element={<WelcomePage/>}/>
        <Route element={<Protected/>}>
         
          <Route path='/pokedex' element={<PokedexCard/>}/>
          <Route path='/pokedex/:Id' element={<PokedexId/>}/>
        </Route> 
      </Routes>
    
    </div>
  )
}

export default App
