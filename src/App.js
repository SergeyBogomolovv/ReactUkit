import React, { useState } from 'react';
import './App.scss'
import CardsContainer from './components/Cards/CardsContainer';
import Header from './components/Header';
import { Button } from 'react-bootstrap';
import WithCarousel from './components/Main/WithCarousel';
import Opisanie from './components/Opisanie/Opisanie';
import InfoButtons from './components/Main/InfoButtons';
import ModalGroups from './components/ModalGroups/ModalGroups';
import Title from './components/Cards/Title';
import Attrativeness from './components/attractiveness/attrativeness';
import Legend from './components/legendoGnutove/legend';
import Teachers from './components/teachers/teachers';
import Footer from './components/footer/footer';
import Documents from './components/documents/documents';
import Abitlist from './components/abitlist/abitlist';
import Otdelenie from './components/otdeleniya/Otdelenie';
import Groups from './components/Groups/Groups';
import {useDispatch, useSelector} from 'react-redux'
import { setGroup108True, setGroup306True, setGroup309True, setModalDocsTrue, setModalGroupsFalse, setModalGroupsTrue, setTeachersTrue } from './components/store/WindowStates';

function App() {
    const dispatch = useDispatch()
    const [abiturients, setAbiturients] = useState([])

    const teachers = useSelector(state => state.teachers.state)
    const Abits = useSelector(state => state.abits.state)
    const group108 = useSelector(state => state.group108.state)
    const group306 = useSelector(state => state.group306.state)
    const group309 = useSelector(state => state.group309.state)
    const firstOtdel = useSelector(state => state.otdelenie1.state)
    const secondOtdel = useSelector(state => state.otdelenie2.state)
    const thirdOtdel = useSelector(state => state.otdelenie3.state)

    if (teachers) {
      return (
        <Teachers />
      )
    }

    if (Abits) {
      return (
        <Abitlist abiturients={abiturients}/>
      )
    }

    if (group108 || group306 || group309) {
      return (<Groups />)
    }
    
    return (
        <div>
          <Header />
          {firstOtdel || secondOtdel || thirdOtdel 
            ? <Otdelenie/>
            : <>
                <WithCarousel/>
                
                <InfoButtons>
                  <Button variant="secondary" onClick={() => dispatch(setModalDocsTrue())}>Подать документы</Button>
                  <Button variant="secondary" onClick={() => dispatch(setTeachersTrue())}>Наши преподаватели</Button>
                  <Button variant="secondary" onClick={() => dispatch(setModalGroupsTrue())}>Список групп</Button>
                </InfoButtons>
                <ModalGroups >
                    <Button variant="dark" onClick={() => {
                      dispatch(setGroup108True()) 
                      dispatch(setModalGroupsFalse())}
                      }>ИСП-108
                    </Button>
        
                    <Button variant="dark" onClick={() => {
                      dispatch(setGroup306True()) 
                      dispatch(setModalGroupsFalse())}
                      }>ИСП-306</Button>
        
                    <Button variant="dark" onClick={() => {
                      dispatch(setGroup309True()) 
                      dispatch(setModalGroupsFalse())}
                      }>ИСП-309</Button>
                </ModalGroups>
                <Documents abiturients={abiturients} setAbiturients={setAbiturients}/>
                <Opisanie/>
                <Title>Три кита, на которых держиться наш колледж:</Title>
                <CardsContainer/>
                <Legend/>
                <Title>Наши отличившиеся преподы: </Title>
                <Attrativeness/>
                <Footer/>
            </>
          }
                  
        </div>
      )
}
export default App;