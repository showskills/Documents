import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import FreelancerFAQAccordionAppOne from "../../Container/FreelancerFAQAccordionAppOne";
import FreelancerFAQAccordionAppTwo from "../../Container/FreelancerFAQAccordionAppTwo";

const FreelancerFAQ = () =>{
    return (<>
<h1 style={{textAlign: "center"}}>Freelancer FAQ</h1>
<div style={{ backgroundColor: "grey", padding: "80px 150px 10px", margin: "40px 100px", border: "2px solid black"}}>
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

    </>);
};

export default FreelancerFAQ;