import "./styles.css"
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/128/338/338337.png" />
      <Card.Body>
        <Card.Title>Titulo do Cartao</Card.Title>
        <Card.Text>
            Bem vindo BlueSky 💀
        </Card.Text>
        <Card.Text>
            Rotapé do Cartao
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;