import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import FreelancerFAQAccordionAppOne from "../../Container/FreelancerFAQAccordionAppOne";
import FreelancerFAQAccordionAppTwo from "../../Container/FreelancerFAQAccordionAppTwo";
import Footer from "../Footer";
import './FAQ.css'

const FreelancerFAQ = () =>{
    return (<>
<h1 style={{textAlign: "center"}}>Freelancer FAQ</h1>
<div className="box_Accordion">
   <Container>
     <Row>
       <Col>
         <div><FreelancerFAQAccordionAppOne /></div>
       </Col>
       <Col>
          <div><FreelancerFAQAccordionAppTwo /></div>
       </Col>
      </Row>
   </Container>
</div>
<Footer/>
    </>);
};

export default FreelancerFAQ;