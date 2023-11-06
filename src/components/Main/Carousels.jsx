import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Carousel1() {
  return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./pngs/photo_2023-10-29_12-15-39.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./pngs/photo_2023-10-29_12-15-39 (2).jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./pngs/photo_2023-10-29_12-15-38.jpg"
            alt="Third slide"
          />
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src="./pngs/another.jpg"
            alt="Fourth slide"
          />
          </Carousel.Item>
      </Carousel> 
  );
}

export default Carousel1