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
import Otdelenie from './components/otdeleniya/Otdelenie';
import Groups from './components/Groups/Groups';

function App() {
    const [abiturients, setAbiturients] = useState([])
    const [modalGroups, setModalGroups] = useState(false)
    const [teachers, setTeachers] = useState(false)
    const [modalDocs, setModalDocs] = useState(false)
    const [modalAbits, setModalAbits] = useState(false)
    const [group108, setGroup108] = useState(false)
    const [group306, setGroup306] = useState(false)
    const [group309, setGroup309] = useState(false)

    const [firstOtdelenie, setFirstOtdelenie] = useState(false)
    const [secondOtdelenie, setSecondOtdelenie] = useState(false)
    const [thirdOtdelenie, setThirdOtdelenie] = useState(false)
    
    
    if (firstOtdelenie || secondOtdelenie || thirdOtdelenie) {
      return (
        <>
          <Header setVisible={setModalAbits} setFirstOtdelenie={setFirstOtdelenie} setSecondOtdelenie={setSecondOtdelenie} setThirdOtdelenie={setThirdOtdelenie}/>
          <Otdelenie firstOtdelenie={firstOtdelenie} setFirstOtdelenie={setFirstOtdelenie} secondOtdelenie={secondOtdelenie} setSecondOtdelenie={setSecondOtdelenie} thirdOtdelenie={thirdOtdelenie} setThirdOtdelenie={setThirdOtdelenie}/>
          
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

    if (group108 || group306 || group309) {
      return (<Groups group108={group108} group306={group306} group309={group309} setGroup306={setGroup306} setGroup309={setGroup309} setGroup108={setGroup108}/>)
    }

    return (
        <div>
          <Header setVisible={setModalAbits} setFirstOtdelenie={setFirstOtdelenie} setSecondOtdelenie={setSecondOtdelenie} setThirdOtdelenie={setThirdOtdelenie}/>
          <WithCarousel/>
  
          <InfoButtons>
            <Button variant="secondary" onClick={() => setModalDocs(true)}>Подать документы</Button>
            <Button variant="secondary" onClick={() => setTeachers(true)}>Наши преподаватели</Button>
            <Button variant="secondary" onClick={() => setModalGroups(true)}>Список групп</Button>
          </InfoButtons>
  
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