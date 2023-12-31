import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cl from './Cards.module.scss'
import { Transition } from 'react-transition-group';

function BasicExample(props) {
  return (
    <Card bg='dark' text='white' border='dark' className={[cl.CardCon, 'siteImage'].join(' ')}>
      <Card.Img variant="top" src={props.title} className={cl.cardIMG}/>
      <Card.Body>
        <Card.Title className={cl.CardTitle}>{props.name}</Card.Title>
        <Card.Text as='p' className={cl.CardText}>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;