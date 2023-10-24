import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function Header(props) {
  const { player1, onP1NameChange, isPlayerSet, onPlayerSet } = props;

  function handleFormSubmit(e) {
    e.preventDefault();
    onPlayerSet();
  }

  return (
    <Container fluid className="text-center title">
      <h1 className="py-5">The Pokemon Kingdom VS</h1>
      <Row className="headerInputRow d-flex justify-content-between w-100 ">
        {isPlayerSet ? (
          <h3>{player1} Vs Pokemon King</h3>
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

            <Button className="m-3" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Row>
    </Container>
  );
}

Header.propTypes = {
  player1: PropTypes.string,
  onP1NameChange: PropTypes.func,
  isPlayerSet: PropTypes.bool,
  onPlayerSet: PropTypes.func,
};

export default Header;
