import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarDark from '../components/Navbar'
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import FooterDark from '../components/FooterDark';
import Jumbotron from '../components/Jumbotron';
import Lista from '../components/Lista';
import './App.css'

function App() {
  

  return (
    <>
      <NavbarDark />
      <Container style={{ minHeight: '85vh' }} >
        <Row >
      <Jumbotron />
      </Row>
      <Row>
      <Lista />
      </Row>
      </Container>
      <FooterDark />
    </>
  )
}

export default App
