import { Nav,Navbar ,Form,Button,FormControl} from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      
      <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Showskills</Navbar.Brand>
    <Nav className="mr-auto">
  
      <Nav.Link href="/signIn">SignIn</Nav.Link>
      <Nav.Link href="/orders">Orders</Nav.Link>
      <Nav.Link href="/lists">Lists</Nav.Link>
      <Nav.Link href="/messages">Messages</Nav.Link>
      <Nav.Link href="/profile">Profile</Nav.Link>
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
