import cardBack from "../images/cardback.png";
import PropTypes from "prop-types";

function PokeCardBack(props) {
  const { card, index, player, onCardSelect } = props;

  if (player === 2) {
    return (
      <div className="pokeCardBackContainer">
        <img
          src={cardBack}
          className={"img" + index + " cardBackImg" + player}
        />
      </div>
    );
  } else {
    return (
      <div className="pokeCardBackContainer" onClick={() => onCardSelect(card)}>
        <img
          src={cardBack}
          className={"img" + index + " cardBackImg" + player}
        />
      </div>
    );
  }
}

PokeCardBack.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  player: PropTypes.number,
  onCardSelect: PropTypes.func,
};

export default PokeCardBack;
