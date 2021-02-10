import React from "react";
import classes from "./Footer.module.css";
import FooterImage from './FooterImage/FooterImage';

//images
import reactImg from '../../assets/img/react.png';
import bootstrapImg from '../../assets/img/bootstrap.png';
import cssImg from '../../assets/img/css.png';
import adobeImg from '../../assets/img/adobe-illustrator.png';
import timImg from '../../assets/img/creative-tim.png';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

class DemoFooter extends React.Component {
  render() {
    return (
      <>
        <footer className={classes.footer}>
          <Container>
            <Row>
              <Col className={classes.footer_container}>
                <br/>
                <h2 className={classes.footerTitle}>Tools Used to Build This Website</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <FooterImage 
                  title="React.JS"
                  src={reactImg}
                />
              </Col>
              <Col>
                <FooterImage 
                  title="Bootstrap"
                  src={bootstrapImg}
                />
              </Col>
              <Col>
                <FooterImage 
                  title="CSS"
                  src={cssImg}
                />
              </Col>
              <Col className={classes.imageContainer}>
                <FooterImage 
                  title="Adobe Illustrator"
                  src={adobeImg}
                />
              </Col>
              <Col>
                <FooterImage 
                  title="Creative Tim HTML"
                  src={timImg}
                />
              </Col>
            </Row>
            <Row>
              <Col>
              <div className={classes.copyText}>
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
