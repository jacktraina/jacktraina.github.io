/*!

=========================================================
* BLK Design System PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
