import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header.jsx";
import useFetch from "./useFetch.jsx";
import { useEffect, useState } from "react";
import PokeList from "./Components/PokeList.jsx";
import PokeCard from "./Components/PokeCard.jsx";

import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  const [count, setCount] = useState(1);

  function handleCatchAPokemonClick() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllPokemon((prev) => [...prev, data]);
      })
      .catch((error) => console.log(error));
    setCount((prev) => prev + 1);
    
  }

  

  console.log(allPokemon);

  return (
    <>
    <Container className="appContainer" fluid>
      <Header onCatchAPokemonClick={handleCatchAPokemonClick}></Header>
      <PokeList allPokemon={allPokemon} />
    </Container>
    </>
  );
}

export default App;
