import React from "react";
import Image_two from "../Home/Image_two";
import {Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Overview = () =>{
    return (<>

    <div style= {{backgroundColor: "rgb(235, 232, 232)", padding: "5px", margin: "0px 20px 40px 20px"}}>
    <Container>
  <Row>
    <Col>
    <h1 style={{fontFamily: "fantasy"}}>Ready to start selling on ShowSkills? Here’s the breakdown:</h1>
<br/><hr/>
<h2>Learn what makes a successful profile</h2>
<p>Discover the do’s and don’ts to ensure you’re always on the right track.</p>
<hr/>
<h2>Create your seller profile</h2>
<p>Add your profile picture, description, and professional information.</p>
<hr/>
<h2>Publish your Gig</h2>
<p>Create a Gig of the service you’re offering and start selling instantly.</p>
<hr/>
<Link to='/startselling/overview/do'><Button variant="success" type="submit" size= "lg" width= "1%">
    Cotinue
</Button></Link>
    </Col>
    <Col>
    <br/><br/><br/><br/><br/>
      <Image_two/>
    </Col>
  </Row>
</Container>
    </div>

    </>);
};

export default Overview;