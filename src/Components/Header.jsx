import { Button, Col, Container, Form, Row } from "react-bootstrap";

function Header(props) {
  const { player1, player2, onP1NameChange, onP2NameChange, isPlayerSet, onPlayerSet } = props;
  
  

  function handleFormSubmit(e) {
    e.preventDefault();
    onPlayerSet()
  }

  return (
    <Container fluid className="text-center title">
      <h1 className="py-5">The Pokemon Kingdom VS</h1>
      <Row className="headerInputRow d-flex justify-content-between w-100 ">
        {isPlayerSet ? (
          <h3>
            {player1} Vs {player2}
          </h3>
        ) : (
          <Form onSubmit={handleFormSubmit} className="w-100">
            <Col md={4} className="d-inline-flex">
              <Form.Label className="inputLabel" htmlFor="player1Name">
                Player 1:
              </Form.Label>
              <Form.Control
                id="player1Name"
                className="w-50 "
                defaultValue={player1}
                type="text"
                onChange={(e) => onP1NameChange(e.target.value)}
                placeholder="Player 1"
              />
            </Col>

            <Col md={4} className="d-inline-flex">
              <Form.Label
                className="inputLabel align-middle"
                htmlFor="player2Name"
              >
                Player 2:
              </Form.Label>
              <Form.Control
                id="player1Name"
                className="w-50"
                defaultValue={player2}
                type="text"
                onChange={(e) => onP2NameChange(e.target.value)}
                placeholder="Player 2"
              />
            </Col>
            <Button className="m-3" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Row>
    </Container>
  );
}

export default Header;
