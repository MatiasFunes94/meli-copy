import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import data from '../data.js';
import { RiTruckLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';

const IndividualCard = () => {
  return (
    <div className="d-flex mb-5">
    {data && data.products.map((ele, index) => (
      <Card key={index} className="card-images">
      <Card.Img variant="top" src={require(`${ele.image}`)} className="image-card"/>
      <Card.Body>
        <span className="truck-card"><RiTruckLine /></span>
        <div className="div-price-cuotas">
          <p className="price-card">${ele.price}</p>
          <p className="cuotas-card">{ele.cuotas}</p>
        </div>
         {/* <div className="bottom-description">
          <p className="description">{ele.bottom}</p>
         </div> */}
         <span></span>
      </Card.Body>
    </Card>
    ))}
    </div>
  );
};

export default IndividualCard;
