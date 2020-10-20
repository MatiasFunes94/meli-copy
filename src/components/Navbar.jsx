import React from "react";
import { InputGroup, FormControl, Nav, NavDropdown } from "react-bootstrap";
import { Container, Col, Row } from "react-bootstrap";
import { BsSearch } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { VscBell } from 'react-icons/vsc';
import { FiShoppingCart } from 'react-icons/fi';
import { BsGift } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  return (
    <Container fluid>
    <Row style={{ backgroundColor: "#fee227" }} className="d-flex justify-content-center p-2">
      <Col xs={2} className="d-flex justify-content-start logo-meli flex-column">
        <img src={require("./images/meli.jpeg")} className="meli-jpeg"></img>
        <div className="d-flex justify-content-start" >
        <Row className="d-flex justify-content-center enviar-matias">
          <div  className="d-flex align-items-center p-0"><span style={{fontSize: '25px'}}><GoLocation /></span></div>
          <div ><span style={{fontSize: '13px'}}>Enviar a Matias</span><br></br>
        Paso de los Andes...</div>
        </Row>
      </div>
      </Col>


      <Col xs={5} >
        <InputGroup className="d-flex justify-content-start mb-3 form-input-search">
          <FormControl
            placeholder="Buscar productos, marcas y mas..."
            aria-label="Buscar productos, marcas y mas..."
            aria-describedby="basic-addon2"
            style={{height: '3rem', width: '5rem'}}
          />
          <InputGroup.Append >
            <InputGroup.Text id="basic-addon2"><BsSearch /></InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <Nav className="justify-content-start bottom-searchbar" >
        <Nav.Item>
            <Nav.Link className="p-2 text-dark">Categorias <MdKeyboardArrowDown /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark">Ofertas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark">Historial</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark">Supermercado</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark">Tiendas Oficiales</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark">Vender</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark">Ayuda</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      

      <div >
      <div className="d-flex justify-content-center envio-gratis mt-3" >
        <BsGift className=""/><h6 className="ml-2" >Envios gratis por Mercado Puntos</h6>
      </div>
      <div>
      <Nav className="d-flex justify-content-center" activeKey="/home" className="miscompras-favoritos" >
        <Nav.Item>
            <Nav.Link className="p-2 text-dark"><span style={{fontSize: '19px'}}><FaRegUserCircle /></span> Matias <MdKeyboardArrowDown /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark">Mis Compras</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark">Favoritos <MdKeyboardArrowDown /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark"><VscBell className="h5"/></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="p-2 text-dark"><FiShoppingCart className="h5"/></Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      </div>
    </Row>
    </Container>
  );
};

export default Navbar;
