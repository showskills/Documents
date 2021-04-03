import { Card } from "react-bootstrap";
import NavBar from "../components/NavBar";

const Profile = () => {
  return (

    <div >
      <NavBar/>
      <Card style={{ width: "24rem" ,margin:'auto'}}>
        <Card.Img variant="top" src="logo192.png" />
        <Card.Body style={{ backgroundColor: "grey" }}>
          <Card.Title style={{ color: "white" }}>wordpress</Card.Title>
          <Card.Text>React</Card.Text>
          <Card.Text>Lohanaman2000@gmail.com</Card.Text>
          <Card.Text>aman</Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
