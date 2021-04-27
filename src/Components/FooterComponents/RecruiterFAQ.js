import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import RecruiterFAQAccordionAppOne from "../../Container/RecruiterFAQAccordionAppOne";
import RecruiterFAQAccordionAppTwo from "../../Container/RecuiterFAQAccordionAppTwo";

const RecruiterFAQ = () =>{
    return (<>
<h1 style={{textAlign: "center"}}>Freelancer FAQ</h1>
<div style={{ backgroundColor: "grey", padding: "80px 150px 10px", margin: "40px 100px", border: "2px solid black"}}>
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

    </>);
};

export default RecruiterFAQ;