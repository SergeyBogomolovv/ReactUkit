import ListGroup from 'react-bootstrap/ListGroup';

function NumberedExample() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Богомолов Сергей</ListGroup.Item>
      <ListGroup.Item as="li">Мария Уфаркина</ListGroup.Item>
      <ListGroup.Item as="li">Гуламадзода Акмал</ListGroup.Item>
    </ListGroup>
  );
}

export default NumberedExample;