import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import cl from './documents.module.css'
import { useRef, useState } from 'react';

function Documents({visible, setVisible, abiturients, setAbiturients}) {

    const rootClasses = [cl.Container]
    if(visible === true) {
        rootClasses.push(cl.active)
    }

    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [ballValue, setBallValue] = useState('')
    const [inputValue, setInputValue] = useState('')

    const send = () => {
      setAbiturients([...abiturients, {name: nameValue, email: mailValue, ball: ballValue, input: inputValue}])
      setNameValue('')
      setMailValue('')
      setBallValue('')
      setInputValue('')
      setVisible(false)
    }

    const close = () => {
      setVisible(false)
      console.log(abiturients)
    }

  return (
    <div className={rootClasses.join(' ')}>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Подать документы</Modal.Title>
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
        <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Ваш средний балл</InputGroup.Text>
        <Form.Control placeholder='0.00' value={ballValue} onChange={e => setBallValue(e.target.value)}/>
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
   </div>
      
  );
}

export default Documents;
