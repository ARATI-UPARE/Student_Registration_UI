import React, { Component } from 'react';
import { Row,Col,Card } from 'react-bootstrap';
import Register from '../Register/register';

class Home extends Component{
    render(){
        return(
            <Row>
            <Col></Col>
            <Col> <Register/></Col>
            <Col></Col>
          </Row>
        
        );
    }
}
export default Home;