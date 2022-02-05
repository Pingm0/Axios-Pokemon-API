import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [pokemonList,setPokemonList] = useState([])

  useEffect (()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then( res => {
      setPokemonList(res.data.results)
    })
    .catch(err => {
      console.log("Something wrong happend",err)
    })
  },[])


  return (
    <div className="App">
      {
        pokemonList.map((elm,index) => (
          <li key={index}>{elm.name}</li>
        ))
      }
    </div>
  );
}

export default App;