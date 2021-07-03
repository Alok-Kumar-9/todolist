import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Header() {
  //const prest = {
  //boxShadow: "5px 10px 18px yellow",
  //border: "2px solid blue",
  //padding: "2px",
  //display: "flex",
  //justifyContent: "center",
  //alignItems: "center",
  //marginTop: "25px",
  //marginBottom: "5px",
  //};

  const head_main = {
    backgroundColor : "violet",
    color : "white",
  };

  return (
    <>
      <Container style={ head_main }>
        <Row>
          <Col></Col>
          <Col xs={4}>
            <h4 className="text-capitalize text-center">Your To-Do list</h4>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <hr/>
    </>
  );
}

export default Header;
