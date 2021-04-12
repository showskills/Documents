import React from "react";
import Image_two from "../pages_folder/Home/Image_two";
import {Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import Accordion_App_one from "../Accordion/Accordion_App_one";
import Accordion_App_two from "../Accordion/Accordion_App_two";
// import "./index.css";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";

const StartSelling = () =>{
    return (<>

    <Image_two/ >
    
    <div style= {{backgroundColor: "black", color: "white", padding: "40px", margin: "40px 20px 0px 20px"}}>
    <Container>
  <Row>
    <Col>
       <h2 style={{textAlign: "center"}}>A Gig is Bought Every <br/> 4 SEC </h2>
    </Col>
    <Col>
       <h2 style={{textAlign: "center"}}>Transactions <br/> 50M+ </h2>    </Col>
    <Col>
       <h2 style={{textAlign: "center"}}>Price Range <br/> Rs 350 - Rs 1,00,000 </h2>
    </Col>
  </Row>
</Container>
    </div>

    <div style= {{backgroundColor: "rgb(235, 232, 232)", padding: "80px", margin: "0px 20px 40px 20px"}}>
    <h1 style={{textAlign: "center"}}>How It Works</h1>
    <Container>
  <Row>
    <Col>
       <h2 style={{textAlign: "center"}}>1. Create A Gig</h2>
       <p> Sign up for free, set up your Gig, and offer your work to our global audience. </p>
    </Col>
    <Col>
       <h2 style={{textAlign: "center"}}>2. Deliver Great Work</h2>
       <p> Get notified when you get an order and use our system to discuss details with customers. </p>
    </Col>
    <Col>
       <h2 style={{textAlign: "center"}}>3. Get Paid</h2>
       <p> Get paid on time, every time. Payment is transferred to you upon order completion. </p>
    </Col>
  </Row>
</Container>
    </div>

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-Laptop-Image.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Join Our Growing Freelance Community</h3>
      <Link to='/startselling/overview'><Button variant="success" type="submit" size= "lg" width= "1%">
          Become A Seller
    </Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-Laptop-Image.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Work Your Way</h3>
    <Link to='/startselling/overview'><Button variant="primary" type="submit" size= "lg" width= "1%">
          Become A Seller
    </Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Download-Laptop-Image.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>You bring the skill. We'll make earning easy.</h3>
      <Link to='/startselling/overview'><Button variant="danger" type="submit" size= "lg" width= "1%">
          Become A Seller
    </Button></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div style={{margin: "20px", backgroundColor: "grey", padding: "40px", margin: "40px 20px"}}>
   <h1 style={{textAlign: "center"}}>Q & A</h1>
   <Container>
     <Row>
       <Col>
         <div><Accordion_App_one /></div>
       </Col>
       <Col>
          <div><Accordion_App_two /></div>
       </Col>
      </Row>
   </Container>
</div>

    <div style={{padding: "80px", margin: "0px 380px"}}>
    <h2 style={{textAlign: "center"}}>Sign up and create your first Gig today</h2>
    <Link to='/startselling/overview'><Button variant="success" type="submit" size= "lg" width= "1%">
          Get Started
    </Button></Link>
    </div>
    <Footer/>

    </>);
};

export default StartSelling;