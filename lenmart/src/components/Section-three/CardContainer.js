import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './CardContainer.css'

function CardContainer() {
  return (
    <div className="section-three"  id="categories">
        <h2 className="p-2">Best Offers only for You</h2>
    <CardGroup >
      <Card>
        <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Jupiter22/Phase2/All/gaming/DesktopShoveler_200x200._CB609097800_.jpg" className="image-medium" />
        <Card.Body>
          <Card.Title>Electronics</Card.Title>
          <Card.Text>
          See personalized recommendations
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Jupiter22/shoveler/desktop_SL_200x200._CB607278332_.jpg" className="image-medium" />
        <Card.Body>
          <Card.Title>Beauty and Fashion</Card.Title>
          <Card.Text>
            Time to set the Trend!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Consumables/Jupiter/Phase3/Cons_P3_DesktopShoveler_200x200._CB608518216_.jpg"  className="image-medium" />
        <Card.Body>
          <Card.Title>Daily Essentials</Card.Title>
          <Card.Text>
            Let's refill your Daily Essentials
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  );
}

export default CardContainer;