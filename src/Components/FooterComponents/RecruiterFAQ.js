import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import RecruiterFAQAccordionAppOne from "../../Container/RecruiterFAQAccordionAppOne";
import RecruiterFAQAccordionAppTwo from "../../Container/RecuiterFAQAccordionAppTwo";
import Footer from "../Footer";
import './FAQ.css'

const RecruiterFAQ = () =>{
    return (<>
<h1 style={{textAlign: "center"}}>Recruiter FAQ</h1>
<div className="box_Accordion">
   <Container>
     <Row>
       <Col>
         <div><RecruiterFAQAccordionAppOne /></div>
       </Col>
       <Col>
          <div><RecruiterFAQAccordionAppTwo /></div>
       </Col>
      </Row>
   </Container>
</div>
<Footer/>
    </>);
};

export default RecruiterFAQ;