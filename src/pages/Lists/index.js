import React from "react";
import {Footer }from "../../Components";
import ListsModal from "../../Container/ListsModal";
// import GigCardsList from "../../Container/GigCardsList";
import {Container, Row, Col, Button } from 'react-bootstrap';

const Lists = () =>{
    return (<>

   <Container>
    <Row>
        <Col>
           <h1>My lists</h1>
           <p>Organize your go-to freelancers and favorite services into custom lists you can easily access and share with your team.</p>
        </Col>
        <Col></Col>
        <Col>
        <Button variant="link" type="submit" size= "lg" width= "1%">
           <ListsModal/>
        </Button>
        </Col>
    </Row>
   </Container>

    {/* <GigCardsList/> */}
    <Footer/>

    </>);
};

export default Lists;
