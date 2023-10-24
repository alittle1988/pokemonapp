import { Container } from "react-bootstrap";
import PokeCardBack from "./PokeCardBack";
import PropTypes from "prop-types";

function PokeList(props) {
  const { playerCards, player, onCardSelect } = props;

  return (
    <>
      <Container className="d-flex">
        {playerCards.map((card, index) => {
          return (
            <>
              <PokeCardBack
                onCardSelect={onCardSelect}
                card={card}
                key={index}
                index={index}
                player={player}
              />
            </>
          );
        })}
      </Container>
    </>
  );
}

PokeList.propTypes = {
  playerCards: PropTypes.array,
  player: PropTypes.number,
  onCardSelect: PropTypes.func,
};

export default PokeList;
