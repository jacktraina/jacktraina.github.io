import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center mb-2" lg="8">
                <br/>
                <h2 className="footer-title">Tools Used to Build This Website</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <img 
                alt="" 
                title="React.JS"
                className="img-footer" 
                src={require("assets/img/react.png")}
                />
              </Col>
              <Col>
                <img 
                alt="" 
                title="Boostrap"
                className="img-footer" 
                src={require("assets/img/bootstrap.png")}
                />
              </Col>
              <Col>
                <img 
                alt="" 
                title="CSS"
                className="img-footer" 
                src={require("assets/img/css.png")}
                />
              </Col>
              <Col>
                <img 
                alt="" 
                title="Adobe Illustrator"
                className="img-footer-adobe" 
                src={require("assets/img/adobe-illustrator.png")}
                />
              </Col>
              <Col>
                <img 
                alt="" 
                title="Creative Tim HTML"
                className="img-footer" 
                src={require("assets/img/creative-tim.png")}
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <div className="copy-text">
                © Copyright Jack Traina 2020
              </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default DemoFooter;
