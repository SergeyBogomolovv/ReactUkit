import Card from 'react-bootstrap/Card';
import cl from './dostoprimechat.module.css'

function AttrativeCard({card}) {
  return (
      <Card bg='dark' text='light'>
        <Card.Img variant="top" src={card.src} className={cl.img}/>
        <Card.Body>
          <Card.Text className={cl.text}>
            {card.text}
          </Card.Text>
        </Card.Body>
      </Card>
    
  );
}

export default AttrativeCard;