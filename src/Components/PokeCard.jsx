import { Card, Container, Form, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";

function PokeCard(props) {
  const { card } = props;

  return (
    <Container className="pokeCardContainer">
      <Card>
        <Card.Img
          variant="top"
          className="cardImg"
          src={card.sprites.other.dream_world.front_default}
          alt={card.name}
        />

        <hr></hr>
        <Card.Body>
          <Card.Title className="text-dark ">
            {card.name} - {card.stats[0].stat.name}/{card.stats[0].base_stat}
          </Card.Title>
          <hr></hr>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Attacks:</ListGroup.Item>
            <Form.Select arial-label="Attack-label">
              <option>Choose an attack </option>
              {card.stats.map((stat, index) => {
                if (index === 1 || index === 3) {
                  return (
                    <option key={index}>
                      {stat.stat.name}/{stat.base_stat}
                    </option>
                  );
                }
              })}
            </Form.Select>
            <ListGroup.Item>Defense:</ListGroup.Item>
            <Form.Select arial-label="defense-label">
              <option>Choose a Defense</option>
              {card.stats.map((stat, index) => {
                if (index === 2 || index === 4) {
                  return (
                    <option key={index}>
                      {stat.stat.name}/{stat.base_stat}
                    </option>
                  );
                }
              })}
            </Form.Select>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

PokeCard.propTypes = {
  card: PropTypes.object,
};

export default PokeCard;
