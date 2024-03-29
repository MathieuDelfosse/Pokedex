import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from './Components/MyTitle'
import PokemonCard from './Components/PokemonCard'



function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  const [pokemonIndex, setPokemonIndex] = useState(0);

  console.log('mon pokemon index est :', pokemonIndex)

  const handleClickNext = () => {
    if (pokemonIndex < pokemonList.length - 1) { setPokemonIndex(pokemonIndex + 1) }
    else { return }
  }
  const handleClickPrevious = () => {
    if (pokemonIndex === 0) { return }
    else { setPokemonIndex(pokemonIndex - 1) }
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button disabled={pokemonIndex > 0 ? false : true} onClick={handleClickPrevious}>Précédent</button>
      <button disabled={pokemonIndex < pokemonList.length-1 ? false : true} onClick={handleClickNext}>Suivant</button>
    </div>
  )
};

export default App
