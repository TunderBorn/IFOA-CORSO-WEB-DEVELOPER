import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCustom(props) {
  return (
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src="https://www.corriere.it/methode_image/2022/02/15/Tecnologia/Foto%20Tecnologia/gatto-incazzoso.jpg?v=202202162030" width={{ width: '18rem' }}/>
      <Card.Body >
        <Card.Title >Card Title</Card.Title>
        <Card.Text>
          testo card
        </Card.Text>
        <Button variant="danger">bottone card</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCustom;