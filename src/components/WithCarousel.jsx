import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Carousel1 from './Carousels'

export default function WithCarousel() {
  return (
    <div className='WithCarouselContainer'>
        <Carousel1/>        
        <Image src="./pngs/img_0089.jpg" roundedCircle className='dirik'/>
        <p className='dirikName'>Директор Колледжа:</p>
        <p className='dirikQuestion'>"Ну что ж, за вопрос тебе минус 10 процентов"</p>       
    </div>
  )
}
