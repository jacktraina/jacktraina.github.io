import React from "react";
import './About.css';
import AboutCard from './AboutCard/AboutCard';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

let currentSource = require("assets/img/jack.png");

function ChangePicture(props) {
  return(
    <img
      className="work-image-2"
      height="900"
      id="workPicture"
      style={{ overflow: "visible" }}
      transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
      width="900"
      src={props.src}
    />
  );
}

function AboutSection(props) {
  return (
    <div 
      className="info-item"
      onMouseEnter={() => {
        document.getElementById("workPicture").src=props.picture;
      }}
      onMouseLeave={() => {
        document.getElementById("workPicture").src=require("assets/img/jack.png");
      }}
      >
      <div className="info-icon">
        <i className={props.iconClass} />
      </div>
      <div className="info-description">
        <h3 className="info_title">{props.title}</h3>
        <p className="info-item-description">{props.description}</p>
      </div>
    </div>
  );
}

class About extends React.Component {
  render() {

    const workDescription1 = ["Hazel Health - Product Management Intern",<br/>,
    "Anheuser-Busch - GMT Financial Intern",<br/>,
    "GoFundMe - BizOps and Software Analyst",<br/>];

    const workDescription2 = ["Anheuser-Busch - Frontend Engineer",<br/>,
    "Hazel Health - Product Intern",<br/>,
    "GoFundMe - BizOps and Software Analyst",<br/>];

    const leadership1 = ["The Delphic Club - Vice President",<br/>,
    "Crimson Key Society - TEACH & Tour Coordinator",<br/>,
    "Harvard Club Spikeball - President",<br/>];

    const leadership2 = ["The Delphic Club - Vice President",<br/>,
    "Crimson Key Society - Tour Coordinator",<br/>,
    "Harvard Club Spikeball - President",<br/>];


    return (
      <>
      <div>
        <div id="about">
          <div className="features6">
            <Container>
              <Row>
                <Col className="title-col" lg="8">
                  <h2 className="about-title">About Me</h2>
                </Col>
              </Row>
              <Row className="phone">
                <AboutCard title="Education" description={["Harvard University, May 2022","A.B. Computer Science, Minor in Economics", "", "Computational Theory, Algorithms & Data Structures, UI/UX Design, Tech Ethics"]}/>
                <AboutCard title="Work Experience" description={["Software Engineer - Anheuser-Busch","Product Management Intern - Hazel Health", "GMT Data Eng Intern - Anheuser Busch", "BizOps and SWE Intern - GoFundMe"]}/>
                <AboutCard title="Leadership" description={["Vice President - The Delphic Club","TEACH/Tour Coordinator - Crimson Key Society", "President - Harvard Spikeball", "", "Student Body President - CB West HS"]}/>
              </Row>
              <Row className="notPhone" style={{alignItems: "center"}}>
                <Col>
                  <AboutSection
                    title="Education"
                    description={["Harvard University ",<br/>,
                    "A.B. Computer Science, Economics Minor ",<br/>,
                    "Course Assistant - Multivariable Calculus ",<br/>]}
                    iconClass="tim_icon icon-book-bookmark"
                    picture={require("assets/img/harvard.jpg")}
                  />
                  <AboutSection
                    title="Work Experience"
                    description={window.innerWidth > 999 ? workDescription1 : workDescription2}
                    iconClass="tim_icon icon-laptop"
                    picture={require("assets/img/work.png")}
                  />
                  <AboutSection
                    title="Leadership"
                    description={window.innerWidth > 999 ? leadership1 : leadership2}
                    iconClass="tim_icon icon-bulb-63"
                    picture={require("assets/img/cks.jpg")}
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
                  src={require("assets/img/jack.png")}
                />
                </Col>
              </Row>
            </Container>
          </div>
        </div>{" "}
      </div>
      </>
    );
  }
}

export default About;