import ListGroup from 'react-bootstrap/ListGroup';
import cl from './Group108.module.css'
import ListPerson from './ListPerson';
import { Button, Image } from 'react-bootstrap';

export default function List108() {
  return (
    <>
      <div className={cl.title}>Группа № 108</div>
      <div className={cl.listContainer}>
        <ListPerson>Грекас <img src="./pngs\GLUSI.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Вадим Метеличенко <img src="./pngs\GULAMADZODICHI.png" className={cl.listimage} /></ListPerson>
        <ListPerson>Гуламадзода <img src="./pngs\NIKITEICH.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Гнутов <img src="./pngs\Grekich.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Тимчик <img src="./pngs\Grekich.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Никита <img src="./pngs\Grekich.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Еще грекас <img src="./pngs\Grekich.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Фамилия Имя Отчество <img src="./pngs\Grekich.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Фамилия Имя Отчество <img src="./pngs\Grekich.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Фамилия Имя Отчество <img src="./pngs\Grekich.png" className={cl.listimage}/></ListPerson>
        <ListPerson>Фамилия Имя Отчество <img src="./pngs\Grekich.png" className={cl.listimage}/></ListPerson>
      </div>
    </>
    
  );
}