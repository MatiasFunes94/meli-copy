import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Carrousel from './components/Carrousel';
import Card from './components/Card';
import Views from './components/Views';


import { Container, Row, Col } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";

function App() {
  return (
    <div style={{backgroundColo: '#DEDEDE'}}>
      <Navbar />
      <Carrousel />
      <Card />
      <Views />
    </div>
  );
}

export default App;
