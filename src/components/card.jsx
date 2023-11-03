import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card bg='dark' text='white' border='secondary' className='CardCon'>
      <Card.Img variant="top" src={props.title} className='cardIMG'/>
      <Card.Body>
        <Card.Title className='CardTitle'>{props.name}</Card.Title>
        <Card.Text as='p' className='CardText'>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;