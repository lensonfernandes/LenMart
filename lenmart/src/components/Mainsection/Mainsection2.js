import Carousel from 'react-bootstrap/Carousel';
import './Mainsection2.css'

function Mainsection2() {
  return (
    <Carousel variant="dark" class="carousel-container">
      <Carousel.Item>
        <img
          className="d-block w-100 heightCarousel"
          src="https://plus.unsplash.com/premium_photo-1663047856766-6fe0b0309ddb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className="text-dark display-3 bg-light rounded">Buy fruits which are produced locally</h5>
          <p className="text-dark display-5 bg-light rounded">Mangos, Bananas, you name the fruit and we have it for You!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 heightCarousel"
          src="https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className="text-dark display-3 bg-light rounded">Try out the vast collection of Snacks</h5>
          <p className="text-dark display-5 bg-light rounded">Snacks to munch for the Young and the Old</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 heightCarousel"
          src="https://lp-cms-production.imgix.net/2022-10/Vietnam-iStock-931498186-RFC.jpeg?auto=format&q=40&ar=16%3A9&fit=crop&w=1946"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className="text-dark display-3 bg-light rounded">Finger licking taste in our Food Section</h5>
          <p className="text-dark display-5 bg-light rounded">
            Its sooo good, that you will forget your surroundings.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Mainsection2;