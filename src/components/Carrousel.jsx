import React from "react";
import { Carousel } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Content = () => {
  return (
      <Container fluid className="d-flex justify-content-center">
        <Carousel style={{ height: "300px", width: "1500px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./images/imagen2.webp")}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./images/imagen1.webp")}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("./images/imagen1.jpeg")}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
  );
};

export default Content;
