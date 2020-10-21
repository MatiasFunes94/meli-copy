import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import IndividualCard from './IndividualCard';


const Views = () => {
    return (
        <div className="d-flex justify-content-center">
        <div style={{ marginTop: '5rem', width: '1200px'}} >
            <Row>
                <Col xs={4}><p className="views-ultima-visita">Basado en tu última visita</p></Col>
                <Col> <p className="d-flex align-self-center views-ver-historial mt-3">Ver historial</p></Col>
            </Row>
            <Row className="">
                <Col xs={1}></Col>
                <Col ><IndividualCard /></Col>
                <Col xs={1}></Col>
            </Row>
        </div>
        </div>
    )
}

export default Views;