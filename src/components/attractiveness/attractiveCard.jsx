import Card from 'react-bootstrap/Card';
import cl from './dostoprimechat.module.css'

function AttrativeCard({src, text}) {
  return (
      <Card bg='secondary' text='light'>
        <Card.Img variant="top" src={src} className={cl.img}/>
        <Card.Body>
          <Card.Text>
            {text}
          </Card.Text>
        </Card.Body>
      </Card>
    
  );
}

export default AttrativeCard;