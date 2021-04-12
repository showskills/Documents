import React from "react";
import {Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./StartSelling.css";

const Overview_dont = () =>{
    return (<>

    <div style= {{backgroundColor: "rgb(235, 232, 232)", padding: "20px", margin: "0px 20px 40px 20px"}}>
    <Container>
    <Row>
    <Col><img src="https://i0.wp.com/mobilityarena.com/wp-content/uploads/2018/10/laptop-wallpapers-and-laptop-backgrounds.jpg" style={{width: "500px", height:"500px"}}/></Col>
    <Col>
    <h1 style={{fontFamily: "fantasy"}}>Now, let’s talk about the things you want to steer clear of.</h1>
    <p>Your success on ShowSkills is important to us. Avoid the following to keep in line with our community standards:</p>
  <Row>
    <Col>
        <p>Providing any misleading or inaccurate information about your identity.</p><br/>
        <p>Requesting to take communication and payment outside of ShowSkills.</p>
    </Col>
    <Col>
        <p>Opening duplicate accounts. Remember, you can always create more Gigs.</p>
    </Col>
    <Col>
        <p>Soliciting other community members for work on ShowSkills.</p>
    </Col>
    </Row>
    <Row>
        <Col>
        <Link to='/startselling/overview'><Button variant="success" type="submit" size= "lg" width= "1%">
           Cotinue
        </Button></Link>
        </Col>
        <Col>
        <Link to='/startselling/overview/do'><Button variant="link" type="submit" size= "lg" width= "1%">
          Back
        </Button></Link>
        </Col>
    </Row>
    </Col>
  </Row>
</Container>

    </div>

    </>);
};

export default Overview_dont;