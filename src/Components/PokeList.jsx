import { Button, Col, Container, Row } from "react-bootstrap";
import PokeCard from "./PokeCard";

function PokeList(props) {
  const { allPokemon } = props;
  return (
    <Container>
      <Row>
        {allPokemon.length > 0 ? (
          <h1 className="text-center">
            You have caught {allPokemon.length} Pokemon!
          </h1>
        ) : (
          <h1 className="text-center">You Have no Pokemon!</h1>
        )}
      </Row>
      <Row >
        {allPokemon.map((pokemon, index) => {
          return (
            <Col md={3} className="align-items-stretch mb-5" key={index}>
              <PokeCard pokemon={pokemon} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default PokeList;
