import React, { useState } from 'react';
import './App.scss'
import CardsContainer from './components/Cards/CardsContainer';
import Header from './components/Header';
import { Accordion, Button } from 'react-bootstrap';
import WithCarousel from './components/Main/WithCarousel';
import Opisanie from './components/Opisanie/Opisanie';
import InfoButtons from './components/Main/InfoButtons';
import ModalGroups from './components/ModalGroups/ModalGroups';
import Title from './components/Cards/Title';
import Attrativeness from './components/attractiveness/attrativeness';
import Legend from './components/legendoGnutove/legend';
import Teachers from './components/teachers/teachers';
import List108 from './components/Groups/List108';
import List309 from './components/Groups/List309';
import List306 from './components/Groups/List306';
import Footer from './components/footer/footer';
import Documents from './components/documents/documents';
import Abitlist from './components/abitlist/abitlist';
import FirstOtdelenie from './components/otdeleniya/firstOtdelenie';

function App() {
    const [abiturients, setAbiturients] = useState([])
    const [modalGroups, setModalGroups] = useState(false)
    const [teachers, setTeachers] = useState(false)
    const [modalDocs, setModalDocs] = useState(false)
    const [modalAbits, setModalAbits] = useState(false)

    const [firstOtdelenie, setFirstOtdelenie] = useState(false)
    const [secondOtdelenie, setSecondOtdelenie] = useState(false)
    const [thirdOtdelenie, setThirdOtdelenie] = useState(false)
    
  
  // Группы
    const [group108, setGroup108] = useState(false)
    const [group306, setGroup306] = useState(false)
    const [group309, setGroup309] = useState(false)

    if (group108) {
      return (
        <List108 setVisible={setGroup108}/>
      )
    }
    if (group306) {
      return (
        <List306 setVisible={setGroup306}/>
      )
    }
    if (group309) {
      return (
        <List309 setVisible={setGroup309}/>
      )
    }
    
    if (firstOtdelenie) {
      return (
        <>
          <Header setVisible={setModalAbits}/>
          <FirstOtdelenie setFirstOtdelenie={setFirstOtdelenie}/>
          <Footer/>
        </>
      )
    }

    if (teachers) {
      return (
        <Teachers visible={teachers} setVisible={setTeachers}/>
      )
    }

    if (modalAbits) {
      return (
        <Abitlist visible={modalAbits} setVisible={setModalAbits} abiturients={abiturients}/>
      )
    }

    return (
      <div>
        <Header setVisible={setModalAbits}/>
        <WithCarousel/>

        <InfoButtons>
          <Button variant="secondary" onClick={() => setModalDocs(true)}>Подать документы</Button>
          <Button variant="secondary" onClick={() => setTeachers(true)}>Наши преподаватели</Button>
          <Button variant="secondary" onClick={() => setModalGroups(true)}>Список групп</Button></InfoButtons>

        <ModalGroups visible={modalGroups} setVisible={setModalGroups}>
            <Button variant="dark" onClick={() => {
              setGroup108(true) 
              setModalGroups(false)}
              }>ИСП-108
            </Button>

            <Button variant="dark" onClick={() => {
              setGroup306(true) 
              setModalGroups(false)}
              }>ИСП-306</Button>

            <Button variant="dark" onClick={() => {
              setGroup309(true) 
              setModalGroups(false)}
              }>ИСП-309</Button>
        </ModalGroups>

        <Documents visible={modalDocs} setVisible={setModalDocs} abiturients={abiturients} setAbiturients={setAbiturients}/>

        <Opisanie/>
        <Title>Три кита, на которых держиться наш колледж:</Title>
        <CardsContainer/>
        <Legend/>
        <Title>Наши отличившиеся преподы: </Title>
        <Attrativeness/>
        <Footer/>
      </div>
    )
}
export default App;