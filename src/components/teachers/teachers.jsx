import React, { useState } from 'react'
import cl from './teachers.module.css'
import { CloseButton, Form } from 'react-bootstrap'
import TeachersCard from './teachersCard'
import { useMemo } from 'react'
import TeachersSelect from './teachersSelect'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Teachers({visible, setVisible}) {
    const [teachers, setTeachers] = useState([
        {name: "Вонючая Куропатка", img: "./pngs/teachers/kuropatka.png", subject: 'history', description: "Это какое то быдлятство! Прощупаваю"},
        {name: "Горошко Сергей Петрович", img: "./pngs/teachers/goroshek.png", subject: 'PE OBZ', description: "Гороховый монотонный чтец учебника"},
        {name: "Жукова Оксана Евгеньевна", img: "./pngs/teachers/zhukova.png", subject: 'PE', description: "Справки надо сдать в самом начале, иначе будут двойки"},
        {name: "Иванников Сергей Анатольевич", img: "./pngs/teachers/ivannikov.png", subject: 'russian literature opd', description: "Лучший препод, единственный здравомыслящий"},
        {name: "Надаева Нина Владимировна", img: "./pngs/teachers/nadaeva.png", subject: 'PE', description: "Так, ну ка вышел отсюда"},
        {name: "Петухова Антонина Васильевна", img: "./pngs/teachers/petuhova.png", subject: 'russian literature', description: "Руки не протягиваем, садимся за первые парты"},
        {name: "Сидельников Лев Владимирович", img: "./pngs/teachers/sidelnikov.png", subject: 'PE', description: "ТИМУР СИДЕЛЬНИКОВ"},
        {name: "Ковалева Елена Вячеславовна", img: "./pngs/teachers/kovaleva.png", subject: 'math', description: "Математика, Элементы высшей математики, Элементы математической логики и тд"},
        {name: "Капуста Светлана Георгиевна", img: "./pngs/teachers/kapusta.png", subject: 'info', description: "Ну раз я вам все обьяснила уже, больше не буду, поэтому контрольную проведем сегодня"},
        {name: "Козлов Владимир Васильевич", img: "./pngs/teachers/kozlov.png", subject: 'math', description: "Входит в состав легенд колледжа. Умный, добрый, всегща всегда поможет и вытянет"},
        {name: "Куантаева Татьяна Юрьевна", img: "./pngs/teachers/kuantaeva.png", subject: 'biology OBZ', description: "Препод с деменцией"},
        {name: "Маликов Евгений Валерьевич", img: "./pngs/teachers/malikov.png", subject: 'info', description: "Колода, Легион,  ВОРОН"},
        {name: "Гулиян Геворг Борисович", img: "./pngs/teachers/gulian.png", subject: 'proger', description: "В детстве  я ходил в армию (10 лет назад). В детстве я обучал молодых студенток и на одной женился (5 лет назад)."},
        {name: "Подобин Валерий Алексеевич", img: "./pngs/teachers/podobin.png", subject: 'proger', description: "Че это тебя так колбасит? Подобие ТРЕУГОЛЬНИКОВ"},
        {name: "Мистер Прайс", img: "./pngs/teachers/price.png", subject: 'physiks', description: "Здравствуйте, мистер прайс"},
        {name: "Сабиржанова Екатерина Витальевна", img: "./pngs/teachers/sabir.png", subject: 'proger', description: "ПАНК"},
        {name: "Глускер  Александр Игоревич", img: "./pngs/teachers/glusi.png", subject: 'proger', description: "ГЛУСКЕР СМЕТАНОВИЧ, когда он с курочкой - БОЙСЯ ЕГО"},
        {name: "Валеев Михаил Владимирович", img: "./pngs/teachers/valeev.png", subject: 'proger', description: "Ну да ты прав), так го пить! Ну многих смущает что я преподаватель"},
    ])
    
    const rootClasses = [cl.Container]
    if(visible === true) {
    rootClasses.push(cl.active)
    }
     
    const [searchTeacher, setSearchTeacher] = useState('')
    const [chooseSubject, setChooseSubject] = useState('')

    const SortedBySubject = useMemo(() => {
        return teachers.filter(post => post.subject.includes(chooseSubject))
    }, [chooseSubject, teachers])

    const SearchedBySubjectTeachers = useMemo(() => {
        return SortedBySubject.filter(post => post.name.includes(searchTeacher))
      }, [searchTeacher, SortedBySubject])


  return (
    <div className={rootClasses.join(' ')}>
        <Navbar expand="lg" className="bg-body-tertiary"  variant='dark' bg='dark'>
            <Container as='div' className={cl.NavContainer}>
                <Navbar.Brand>Преподаватели</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={[cl.NavContainer, 'me-auto'].join(' ')}>
                <Form.Control type="text"  placeholder="Поиск по имени" value={searchTeacher} onChange={e => setSearchTeacher(e.target.value)}/>
                    <TeachersSelect options={[
                        {value: '', name: 'Все предметы'},
                        {value: 'PE', name: 'Физкультура'},
                        {value: 'history', name: 'История'}, 
                        {value: 'OBZ', name: 'ОБЖ'}, 
                        {value: 'russian', name: 'Руссий язык'},
                        {value: 'literature', name: 'Литература'}, 
                        {value: 'math', name: 'Математика'}, 
                        {value: 'info', name: 'Информатика'}, 
                        {value: 'biology', name: 'Биология'}, 
                        {value: 'proger', name: 'Программирование'},
                        {value: 'physiks', name: 'Физика'},
                        ]} value={chooseSubject} onChange={sort => setChooseSubject(sort)}/> 
                    <CloseButton variant='white' onClick={() => setVisible(false)} className={cl.closeBtn}/>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div className={cl.contentContainer}>
            {SearchedBySubjectTeachers.map(teachers => 
                <TeachersCard array={teachers} key={teachers.name}/>
                )}
        </div>
    </div>
  )
}