import React from "react";
import { Media } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosCard } from 'react-icons/io';
import { AiTwotoneCreditCard } from 'react-icons/ai';
import { GiTakeMyMoney } from 'react-icons/gi';
import { BsPlusCircleFill } from 'react-icons/bs';

const Card = () => {
  return (
    <Container>
        <Row style={{ marginTop: '120px'}}>
          <Col style={{backgroundColor: 'white'}} className="card-tarjetas">
            <Media>
             <h4 className="mr-4 text-primary "><IoIosCard /></h4>
              <Media.Body>
                <h5>Tarjeta de Credito</h5>
                <p className="text-primary">Ver promociones bancarias</p>
              </Media.Body>
            </Media>
          </Col>
          <Col style={{backgroundColor: 'white'}} className="card-tarjetas">
            <Media>
             <h4 className="mr-4 text-primary"><AiTwotoneCreditCard /></h4>
              <Media.Body>
                <h5>Tarjeta de débito</h5>
                <p className="text-primary">Ver más</p>
              </Media.Body>
            </Media>
          </Col>
          <Col style={{backgroundColor: 'white'}} className="card-tarjetas">
            <Media >
             <h4 className="mr-4 text-primary"><GiTakeMyMoney /></h4>
              <Media.Body>
                <h5>Efectivo</h5>
                <p className="text-primary">Ver más</p>
              </Media.Body>
            </Media>
          </Col>
          <Col style={{backgroundColor: 'white'}} className="card-tarjetas">
            <Media>
             <h4 className="mr-4 text-primary"><BsPlusCircleFill /></h4>
              <Media.Body>
                <h5>Más medios de pago</h5>
                <p className="text-primary">Ver todos</p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
  );
};

export default Card;
