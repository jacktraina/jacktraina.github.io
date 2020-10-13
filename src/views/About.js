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
        <div className="cd-section" id="features">
          {/* ********* FEATURES 6 ********* */}
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
                    picture="/static/media/cks.02168399.JPG"
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
          {/* ********* END FEATURES 6 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default About;



/*

<div className="info info-horizontal info-default">
  <div className="icon icon-warning">
    <i className="tim-icons icon-atom" />
  </div>
  <div className="description">
    <h3 className="info-title">Education</h3>
    <p>
      Harvard University <br/>
      A.B. Computer Science, Economics Minor <br/>
      Course Assistant - Multivariable Calculus <br/>
    </p>
  </div>
</div>
<div className="info info-horizontal info-default">
  <div className="icon icon-info">
    <i className="tim-icons icon-app" />
  </div>
  <div className="description">
    <h3 className="info-title">Work Experience</h3>
    <p>
      Hazel Health - Product Management Intern <br/>
      Anheuser-Busch - GMT Financial Intern <br/>
      GoFundMe - BizOps and Software Analyst <br/>
    </p>
  </div>
</div>
<div className="info info-horizontal info-default">
  <div className="icon icon-success">
    <i className="tim-icons icon-bell-55" />
  </div>
  <div className="description">
    <h3 className="info-title">For Beginners</h3>
    <p>
      The moment you use Black Kit, you know you’ve never felt
      anything like it. With a single use, this powerfull UI
      Kit lets you do more than ever before.
    </p>
  </div>
</div>

*/




/*
<Col lg="6" xs="10">
  <img
    alt="..."
    className="shape"
    src={require("assets/img/path2.png")}
  />
  <figure className="ie-non-standard-hero-shape">
    <svg
      className="injected-svg js-svg-injector"
      style={{ enableBackground: "new 10 12 878.9 907" }}
      viewBox="10 12 878.9 907"
      x="0px"
      y="0px"
      xmlSpace="preserve"
    >
      <g>
        <defs>
          <path
            d="M329.15,403.44c30.22-62,26.51-223.94,94.06-268.46C479,98.23,560.16,257,700.68,151.61c71.25-53.44,85.54,81,160.38,172.6C1008.5,504.74,881.5,639.14,825.35,686.6c-62.54,52.85-246.14,24.42-386.7,79.28S214.07,834,202.07,702C190.39,573.57,288.69,486.43,329.15,403.44Z"
            id="firstShape"
          />
        </defs>
        <clipPath id="secondShape">
          <use
            style={{ overflow: "visible" }}
            xlinkHref="#firstShape"
          />
        </clipPath>
        <g clipPath="url(#secondShape)">
          <image
            height="900"
            id="workPicture"
            style={{ overflow: "visible" }}
            transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
            width="900"
            xlinkHref={require("assets/img/harvard.jpg")}
          />
        </g>
      </g>
      <g>
        <defs>
          <path
            d="M337.17,855.62c-7.81-35.46,42.38-43.95,63.66-52.44,24.39-9.74,135.86-48,192.58-52.52,64.22-5.13,190.21-26.84,160.46,35.34-19.76,41.3-51.47,64.52-87.63,62.33-46.36-2.81-101.56,4.39-150.8,44C448.53,946.08,450.93,865,412,868,372.28,871,340.79,872.08,337.17,855.62Z"
            id="thirdShape"
          />
        </defs>
        <clipPath id="fourthShape">
          <use
            style={{ overflow: "visible" }}
            xlinkHref="#thirdShape"
          />
        </clipPath>
        <g
          clipPath="url(#fourthShape)"
          transform="matrix(1 0 0 1 0 0)"
        >
          <image
            height="1000"
            id="workPicture"
            style={{ overflow: "visible" }}
            transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
            width="900"
            xlinkHref={require("assets/img/harvard.jpg")}
          />
        </g>
      </g>
    </svg>
  </figure>
</Col>
*/

/*
<img
  className="work-image"
  height="900"
  id="workPicture"
  style={{ overflow: "visible" }}
  transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
  width="900"
  src="/static/media/pawel-nolbert.b317bb17.jpg"
/>
*/