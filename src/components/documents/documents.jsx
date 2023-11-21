import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import cl from './documents.module.scss'
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { setModalDocsFalse } from '../store/WindowStates';

function Documents({abiturients, setAbiturients}) {
    const dispatch = useDispatch()
    const visible = useSelector(state => state.modalDocs.state)
    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [ballValue, setBallValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    const send = () => {
      if (ballValue > 5 || ballValue < 2){
        alert('Ошибка, введен неверный балл')
        setBallValue('')

      } else if (inputValue === '' || nameValue === '' || mailValue === '' || ballValue === '') {
        alert('Ошибка, проверьте данные')

      } else {
        setAbiturients([...abiturients, {name: nameValue, email: mailValue, ball: ballValue, input: inputValue}])
        setNameValue('')
        setMailValue('')
        setBallValue('')
        setInputValue('')
        dispatch(setModalDocsFalse())
      }
    }

    const close = () => {
      setNameValue('')
      setMailValue('')
      setBallValue('')
      setInputValue('')
      dispatch(setModalDocsFalse())
    }

  return (
    <CSSTransition in={visible} timeout={500} classNames='attractive' mountOnEnter unmountOnExit>
      <div className={cl.Container}>
        <CSSTransition in={visible} timeout={500} classNames='card' mountOnEnter unmountOnExit>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title style={{color: '#000'}}>Подать документы</Modal.Title>
            </Modal.Header>

            <Modal.Body data-bs-theme="dark">
            <>
          <InputGroup className="mb-3" >
            <InputGroup.Text id="basic-addon1">ФИО:</InputGroup.Text>
            <Form.Control
              placeholder="Фамилия Имя Отчество"
              aria-label="Username"
              aria-describedby="dark-addon1"
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
              
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Электронная почта"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={mailValue}
              onChange={e => setMailValue(e.target.value)}
            />
            <InputGroup.Text id="basic-addon2">example@gmail.com</InputGroup.Text>
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Ваш средний балл</InputGroup.Text>
            <Form.Control placeholder='0.00' type='number' value={ballValue} onChange={e => setBallValue(e.target.value)}/>
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control as="textarea" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Почему мы должны вас взять'/>
          </InputGroup>
        </>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="secondary" onClick={close}>Закрыть</Button>
            <Button variant="primary" onClick={send}>Отправить</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
}

export default Documents;
