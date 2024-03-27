import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './Components/MyTitle'
import PokemonCard from './Components/PokemonCard'

function App() {

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  )
}

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
  },
];

export default App
