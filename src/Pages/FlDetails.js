import { Card, Button, Modal,Carousel} from "react-bootstrap";
import {NavBar,SendMessageLayout} from '../components';

import { useState } from "react";

const FlDetails = () => {
  const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
 
  return (
    <div style={{ maxWidth: "900px" }}>
      <NavBar />
      <Carousel style={{ fontSize: "10px" }}>
        <Carousel.Item>
          <img src="logo512.png" alt="First slide" />
          <Carousel.Caption>
            <p>First slide label</p>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="logo512.png" alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="logo512.png" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>

        <p>⭐⭐⭐⭐⭐</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card style={{ width: "18rem" }}>
            <Card.Body style={{ backgroundColor: "grey" }}>
              <Card.Title style={{ color: "white" }}>Basic</Card.Title>
              <Card.Text>
                <p>⏳ 1 day dileivery</p>
                🛠 unlimited revision
              </Card.Text>
              <Button variant="primary" href="./flDetails/paymentPage">
                Continue $9.99
              </Button>
            </Card.Body>
            {/* <Button>Send Message</Button> */}
            <div>
              <Button variant="primary" onClick={handleShow}>
               Contact
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Write message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SendMessageLayout/>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={()=>{handleClose(); alert('message sent')}}>
                    Send
                  </Button>
                </Modal.Footer>

              </Modal>
             
            </div>
          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default FlDetails;
