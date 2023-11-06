import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Carousel1 from './Carousels'
import cl from './Main.module.css'

export default function WithCarousel() {
  return (
    <div className={cl.WithCarouselContainer}>
        <Carousel1/>        
        <Image src="./pngs/img_0089.jpg" roundedCircle className={cl.dirik}/>
        <p className={cl.dirikName}>Директор Колледжа:</p>
        <p className={cl.dirikQuestion}>"Ну что ж, за вопрос тебе минус 10 процентов"</p>       
    </div>
  )
}
