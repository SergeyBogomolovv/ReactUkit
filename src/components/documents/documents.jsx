import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import cl from './documents.module.css'

function Documents({visible, setVisible}) {
    const rootClasses = [cl.Container]
    if(visible === true) {
        rootClasses.push(cl.active)
    }
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className={rootClasses} variant='dark' bg='dark'>
        <Modal.Header >
          <Modal.Title>Подать документы</Modal.Title>
        </Modal.Header>

        <Modal.Body >
        <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">ФИО:</InputGroup.Text>
        <Form.Control
          placeholder="Фамилия Имя Отчество"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Электронная почта"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
      </InputGroup>

      <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com/users/
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Почемы мы должны вас взять</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>
    </>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setVisible(false)}>Закрыть</Button>
          <Button variant="primary" onClick={() => setVisible(false)}>Отправить</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Documents;
