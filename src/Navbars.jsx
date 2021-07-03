import React from "react";
import { Col, Container, Nav, Row, Navbar } from "react-bootstrap";
import img1 from "./favicon-trimmy.jpg";

function Navbars() {

  const alertEmail = () => {
    alert("Contact us on e-mail : aloksingh0799@gmail.com");
  };

  const alertAbout = () => {
    alert("A newbie to WebDev...");
  }
  
  return (
    <>
      <Nav activeKey="/home" className="navbar-fixed-top">
        <Container>
          <Row>
            <Col xs={3}>
              <Nav.Item>
                <Nav.Link href="/home">
                  <img
                    src={img1}
                    width="80px"
                    height="80px"
                    alt="Logo"
                    style={{ float: "left" }}
                  />
                  <Container style={{ margin: "0", padding: "0" }}>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0",
                        padding: "0",
                        color: "black",
                      }}
                    >
                      <h3>DONE</h3>
                    </Row>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0",
                        padding: "0",
                        color: "black",
                      }}
                    >
                      <h3>DUSTER</h3>
                    </Row>
                  </Container>
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={7}></Col>
            <Col xs={1}>
              <Nav.Item>
                <Nav.Link href="/home">
                  <p className="mt-4 mb-4" onClick={alertEmail}>ContactUs</p>
                </Nav.Link>
              </Nav.Item>
            </Col>
            <Col xs={1}>
              <Nav.Item>
                <Nav.Link href="/home">
                  <p className="mt-4 mb-4" onClick={alertAbout}>AboutUs</p>
                </Nav.Link>
              </Nav.Item>
            </Col>
          </Row>
        </Container>
      </Nav>
    </>
  );
}

export default Navbars;
