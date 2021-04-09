import { Nav,Navbar ,Form,Button,FormControl} from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Showskills</Navbar.Brand>
    <Nav className="mr-auto">

      <Nav.Link as={Link} to="/signIn">SignIn</Nav.Link>
      <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
      <Nav.Link as={Link} to="/lists">Lists</Nav.Link>
      <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary" href={'/searchResults'}>Search</Button>
    </Form>
  </Navbar>
      <p></p>
    </div>
  );
};

export default NavBar;
