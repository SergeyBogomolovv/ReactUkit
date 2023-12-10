import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Carousel1 from './Carousels'
import cl from './Main.module.scss'

export default function WithCarousel() {
  return (
    <div className={cl.WithCarouselContainer}>
        {window.innerWidth < 900
          ? <Image src="./pngs\photo_2023-10-29_12-15-35.jpg" rounded  className={[cl.Image, 'siteImage'].join(' ')}/>
          : <Carousel1 clName={[cl.Carousel, 'siteImage'].join(' ')}/> 
        }        
        <Image src="./pngs/img_0089.jpg" className={[cl.dirik, 'siteImage'].join(' ')}/>
        <div className={cl.dirikName}>Директор Колледжа:</div>
        <div className={cl.dirikQuestion}>Александров Роман Викторович</div>       
    </div>
  )
}
