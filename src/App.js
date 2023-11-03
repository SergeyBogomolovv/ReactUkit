import React from 'react';
import Carousel4flour from './components/Carousels';
import './App.css'
import './Card.css'
import CardsContainer from './components/CardsContainer';
import Header from './components/Header';
import { Accordion } from 'react-bootstrap';
import CarouselAndPng from './components/Carousels';
import WithCarousel from './components/WithCarousel';
import Opisanie from './components/Opisanie';
import Legends from './components/LegendsTitle';
import LegendsTitle from './components/LegendsTitle';
import InfoButtons from './components/InfoButtons';

function App() {
  
    return (
      <div>
        <Header/>
        <WithCarousel/>
        <InfoButtons/>
        <Opisanie/>
        <LegendsTitle/>
        <CardsContainer/>
      </div>
    )
  
}


export default App;
