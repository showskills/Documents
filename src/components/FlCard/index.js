import { Card, Button,Row ,Col,Container} from "react-bootstrap";


const FlCard = () => {
  return (
    <div >
        <Container fluid>
        <Row>
        <Col >
        <Card style={{ width: "18rem", margin:"auto" }}>
          <Card.Img variant="top" src="logo192.png" />
          <Card.Body style={{backgroundColor:'grey'}}>
            <Card.Title style={{color:'white'}}>wordpress</Card.Title>
            <Card.Text style={{color:'white'}}>
             aman
            </Card.Text>
            <Button variant="primary"  href='./flDetails'>see details</Button>
          </Card.Body>
        </Card></Col>
        <Col >
        <Card style={{ width: "18rem" ,margin:"auto"}}>
          <Card.Img variant="top" src="logo192.png" />
          <Card.Body style={{backgroundColor:'grey'}}>
            <Card.Title style={{color:'white'}}>wordpress</Card.Title>
            <Card.Text style={{color:'white'}}>
             aman
            </Card.Text>
            <Button variant="primary" href='./flDetails'>See Details</Button>
          </Card.Body>
        </Card></Col>
        </Row>
        <p></p>
    
        </Container>
        
      </div>
  );
};

export default FlCard;
