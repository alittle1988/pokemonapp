import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header.jsx";
import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import PokeList from "./Components/PokeList.jsx";
import PokeCard from "./Components/PokeCard.jsx";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const [player1, setPlayer1] = useState("");
  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const [isPlayerSet, setIsPlayerSet] = useState(false);
  const [player1PlayCard, setPlayer1PlayCard] = useState();
  const [player2PlayCard, setPlayer2PlayCard] = useState();
  const [isCardSelected, setIsCardSelected] = useState(false);

  // handles player1 Name Change
  function handleP1NameChange(name) {
    setPlayer1(name);
  }

  // handles player name submit form
  function handlePlayerSetForm() {
    setIsPlayerSet(true);
  }

  // handles random card fetch from api
  function handleDealCards() {
    for (let i = 0; i < 20; i++) {
      let randNum = Math.floor(Math.random() * 100 + 1);
      fetch(`https://pokeapi.co/api/v2/pokemon/${randNum}`)
        .then((response) => response.json())
        .then((data) => {
          if (i <= 9) {
            setPlayer1Cards((prev) => [...prev, data]);
          } else {
            setPlayer2Cards((prev) => [...prev, data]);
          }
        })
        .catch((error) => console.log(error));
    }
  }

  //handles player 1 card select click
  function handlePlayer1CardSelect(card) {
    if (!isCardSelected) {
      setPlayer1PlayCard(card);
      if (isCardSelected === false) {
        setPlayer2Cards(handleCompSelect());
      }
      let newArray = player1Cards.filter((item) => {
        return item !== card;
      });
      setPlayer1Cards(newArray);
      setIsCardSelected(true);
    }
  }

  function handleCompSelect() {
    let RandNum = Math.floor(Math.random() * player2Cards.length);
    let selectedCard = player2Cards[RandNum];
    setPlayer2PlayCard(selectedCard);
    let newArray = player2Cards.filter((item) => {
      return item !== selectedCard;
    });
    return newArray;
  }

  return (
    <>
      <Container className="appContainer" fluid>
        <Header
          player1={player1}
          onP1NameChange={handleP1NameChange}
          isPlayerSet={isPlayerSet}
          onPlayerSet={handlePlayerSetForm}
        ></Header>

        <Row className="justify-content-center mt-4">
          {player1Cards.length === 0 ? (
            <Button
              disabled={!isPlayerSet}
              onClick={handleDealCards}
              className="w-25"
            >
              Deal Cards
            </Button>
          ) : (
            <div></div>
          )}
        </Row>
        <Row className="d-flex justify-content-between">
          <Col md={3}>
            <h3 className="ms-5">{player1}</h3>
            <PokeList
              playerCards={player1Cards}
              player={1}
              onCardSelect={handlePlayer1CardSelect}
            />
          </Col>
          <Col md={3}>
            {player1PlayCard ? (
              <PokeCard card={player1PlayCard} />
            ) : (
              <div></div>
            )}
          </Col>
          <Col md={3}>
            {player2PlayCard ? (
              <PokeCard card={player2PlayCard} />
            ) : (
              <div></div>
            )}
          </Col>
          <Col md={3} className="align-right">
            <h3 className="text-end me-5">Pokemon King</h3>
            <PokeList
              playerCards={player2Cards}
              player={2}
              onCardSelect={null}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
