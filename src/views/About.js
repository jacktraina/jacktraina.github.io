import React from "react";
import './About.css';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function changePicture(props) {
  document.getElementById("workPicture").src = props;
}

function AboutSection(props) {
  return (
    <div 
      className="info info-horizontal info-default"
      onMouseEnter={() => {
        changePicture(props.picture);
      }}
      onMouseLeave={() => {
        changePicture("/static/media/jack.3056f4b0.png");
      }}
      >
      <div className="icon icon-primary">
        <i className={props.iconClass} />
      </div>
      <div className="description">
        <h3 className="info-title">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

class About extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="about">
          <div className="features-6">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center mb-2" lg="8">
                  <h2 className="title">About Me</h2>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col lg="6">
                  <AboutSection
                    title="Education"
                    description={["Harvard University ",<br/>,
                    "A.B. Computer Science, Economics Minor ",<br/>,
                    "Course Assistant - Multivariable Calculus ",<br/>]}
                    iconClass="tim-icons icon-book-bookmark"
                    picture="/static/media/harvard.a20f6afc.jpg"
                  />
                  <AboutSection
                    title="Work Experience"
                    description={["Hazel Health - Product Management Intern",<br/>,
                    "Anheuser-Busch - GMT Financial Intern",<br/>,
                    "GoFundMe - BizOps and Software Analyst",<br/>]}
                    iconClass="tim-icons icon-laptop"
                    picture="/static/media/work.1338ed52.png"
                  />
                  <AboutSection
                    title="Leadership"
                    description={["The Delphic Club - Vice President",<br/>,
                    "Crimson Key Society - TEACH & Tour Coordinator",<br/>,
                    "Harvard Club Spikeball - President",<br/>]}
                    iconClass="tim-icons icon-bulb-63"
                    picture="/static/media/cks.02168399.jpg"
                  />
                </Col>
                <Col>
                <img
                  className="work-image-2"
                  height="900"
                  id="workPicture"
                  style={{ overflow: "visible" }}
                  transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                  width="900"
                  src="/static/media/jack.3056f4b0.png"
                />
                </Col>
              </Row>
            </Container>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default About;