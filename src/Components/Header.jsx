
import { Button, Container } from 'react-bootstrap'

function Header(props) {
  return (
    <Container fluid className='text-center title'>
        <h1 className='my-5'>The Pokemon Kingdom</h1>
        <Button className='mb-5' onClick={props.onCatchAPokemonClick}>Catch A Pokemon</Button>
    </Container>
  )
}

export default Header