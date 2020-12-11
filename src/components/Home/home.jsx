import React, { Component } from 'react';
import { Row,Col,Card } from 'react-bootstrap';
import Register from '../Register/register';

class Home extends Component{
    render(){
        return(
            <Row>
            <Col></Col>
            <Col> <Card style={{width:"42rem"}}> <Register/></Card></Col>
            <Col></Col>
          </Row>
        
        );
    }
}
export default Home;