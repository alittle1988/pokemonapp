import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

function PokeCard(props) {
  const { pokemon } = props;
  return (
    <Container>
      <Card>
        <Card.Img
          variant="top"
          className="cardImg"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />

        <hr></hr>
        <Card.Body>
          <Card.Title className="text-dark ">{pokemon.name}</Card.Title>
          <hr></hr>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Stats:</ListGroup.Item>
            {pokemon.stats.map((stat, index) => {
              return (
                <ListGroup.Item key={index}>
                  {index + 1}. {stat.stat.name}/{stat.base_stat}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PokeCard;
