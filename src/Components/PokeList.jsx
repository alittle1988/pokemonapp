import { Container} from "react-bootstrap";
import PokeCardBack from "./PokeCardBack";

function PokeList(props) {
  const { playerCards, player, onCardSelect } = props;

  return (<>

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
 </> );
}



export default PokeList;
