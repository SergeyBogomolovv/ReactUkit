import Card from 'react-bootstrap/Card';
import cl from './dostoprimechat.module.css'
import { useState } from 'react';

function AttrativeCard({card}) {
  const [showText, setShowText] = useState(false)
  return (
      <Card bg='dark' text='light'>
        <Card.Img variant="top" src={card.src} className={cl.img}/>
        <Card.Body>
        <Card.Title className={cl.CardTitle}>{card.name}</Card.Title>
        {showText !== true
            ? <div onClick={() => setShowText(true)} className={cl.load}>Показать описание</div>
            : <Card.Text className={cl.text}>
                {card.text}
                <div onClick={() => setShowText(false)} className={cl.load}>Скрыть</div>
              </Card.Text>
            }
          
        </Card.Body>
      </Card>
    
  );
}

export default AttrativeCard;