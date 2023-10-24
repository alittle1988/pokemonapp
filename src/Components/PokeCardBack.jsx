import cardBack from '../images/cardback.png';


function PokeCardBack(props) {
    const {card, index, player, onCardSelect} = props;
    
    
  return (
    <div className="pokeCardBackContainer" onClick={() => onCardSelect(card)}>
        <img src={cardBack} className={"img" + index + " cardBackImg" + player} />

    </div>
  )
}

export default PokeCardBack