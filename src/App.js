import React, { useState } from 'react';
import './App.css'
import './Card.css'
import CardsContainer from './components/Cards/CardsContainer';
import Header from './components/Header';
import { Accordion, Button } from 'react-bootstrap';
import WithCarousel from './components/Main/WithCarousel';
import Opisanie from './components/Opisanie/Opisanie';
import InfoButtons from './components/Main/InfoButtons';
import ModalGroups from './components/ModalGroups/ModalGroups';
import Group108 from './components/Groups/Group108';
import Title from './components/Cards/Title';
import Group306 from './components/Groups/Group306';
import Group309 from './components/Groups/Group309';
import ImageAndTextExample from './components/attractiveness/attractiveCard';
import Attrativeness from './components/attractiveness/attrativeness';
import OffcanvasExample from './components/footer.jsx/footer';
import Footer from './components/footer.jsx/footer';
import Legend from './components/legendoGnutove/legend';
import ModalTeachers from './components/modalTeachers';

function App() {
    const [modal, setModal] = useState(false)
    const [group108, setGroup108] = useState(false)
    const [group306, setGroup306] = useState(false)
    const [group309, setGroup309] = useState(false)
  
    return (
      <div>
        <Header/>
        <WithCarousel/>

        <InfoButtons>
          <Button variant="secondary">Приказы о зачислении</Button>
          <Button variant="secondary">Наши преподаватели</Button>
          <Button variant="secondary" onClick={() => setModal(true)}>Список групп</Button></InfoButtons>

        <ModalGroups visible={modal} setVisible={setModal}>
          
            <Button variant="dark" onClick={() => {
              setGroup108(true) 
              setModal(false)}
              }>ИСП-108
            </Button>

            <Button variant="dark" onClick={() => {
              setGroup306(true) 
              setModal(false)}
              }>ИСП-306</Button>
            <Button variant="dark" onClick={() => {
              setGroup309(true) 
              setModal(false)}
              }>ИСП-309</Button>
        </ModalGroups>

        <Group108 visible={group108} setVisible={setGroup108}/>
        <Group306 visible={group306} setVisible={setGroup306}/>
        <Group309 visible={group309} setVisible={setGroup309}/>
        <Opisanie/>
        <Title>Три кита, на которых держиться наш колледж</Title>
        <CardsContainer/>
        <Legend/>
        <Title>Наши достопримечательности: </Title>
        <Attrativeness/>
      </div>
    )
  
}


export default App;
