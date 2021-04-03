import { Card, Button } from "react-bootstrap";
import NavBar from "./components/NavBar";
const PaymenntPage = () => {
  return (
    <div>
     <NavBar/>
     <p></p>
      <Card border="primary" style={{ width: "18rem", margin:'auto',marginBottom:'10px'}}>
        <Card.Header>Select Payment Method</Card.Header>
        <Card.Body>
          <Card.Text style={{color:'black'}}>
            Credit Card
          </Card.Text>
          <Card.Text style={{color:'black',borderTop:'1px solid black'}}>
            Google pay
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button>Continue</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PaymenntPage;
