import React from "react";
import {Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Overview_do = () =>{
    return (<>

    <div style= {{padding: "20px", margin: "0px 20px 40px 20px"}}>
    <Container>
    <Row>
    <Col><img src="https://wallpaperaccess.com/full/279547.jpg" style={{width: "500px", height:"500px"}}/></Col>
    <Col>
    <h1 style={{fontFamily: "fantasy"}}>What makes a successful ShowSkills profile?</h1>
    <p>Your first impression matters! Create a profile that will stand out from the crowd on ShowSkills.</p>
  <Row>
    <Col>
        <p>Take your time in creating your profile so it’s exactly as you want it to be.</p><br/>
        <p>Add credibility by linking out to your relevant professional networks.</p>
    </Col>
    <Col>
        <p>Accurately describe your professional skills to help you get more work.</p><br/>
        <p>Put a face to your name! Upload a profile picture that clearly shows your face.</p>
    </Col>
    <Col>
        <p>To keep our community secure for everyone, we may ask you to verify your ID.</p>
    </Col>
    </Row>
    <Row>
        <Col>
        <Link to='/startselling/overview/dont'><Button variant="success" type="submit" size= "lg" width= "1%">
           Cotinue
        </Button></Link>
        </Col>
        <Col>
        <Link to='/startselling/overview'><Button variant="link" type="submit" size= "lg" width= "1%">
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

export default Overview_do;