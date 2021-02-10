import React from "react";
import classes from "./Intro.module.css";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

class Intro extends React.Component {
  state = {
    activeIndex: 0
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("about-us");
  }
  componentWillUnmount() {
    document.body.classList.remove("about-us");
  }
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  render() {
    return (
      <>
      <Container>
        <div className={classes.topBuffer}/>
        <div ref="wrapper">
          <div className={classes.pageHeader} id="intro">
            <div className={classes.contentCenter}>
              <Container>
                <Row className={classes.row_main}>
                  <Col className={classes.ml_auto + " " + classes.mr_auto}>
                    <h1 className={classes.introTitle}>
                      <span 
                        style={{color:"#e14eca6c"}}
                        className={classes.intro1}
                      >
                        Designer
                      </span><br/>
                      <span 
                        style={{color:"#e14eca9c"}}
                        className={classes.intro2}
                      >
                        Innovator
                      </span><br/>
                      <span 
                        style={{color:"#e14eca"}}
                        className={classes.intro3}
                      >
                        Software Engineer
                      </span>
                    </h1>
                    <p className={classes.intro}>
                      I'm Jack, a computer science student at Harvard University who strives to combine innovative tech with beautiful design to create meaningful products.
                      <br/>
                      <br/>
                    </p>
                    <Row>
                      <Col>
                        <Button 
                          color="primary"
                          href="#about"
                          >Explore</Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col className={classes.ml_auto + " " + classes.mr_auto}>
                    <img
                      alt="..."
                      className={classes.blob}
                      src={require("assets/img/path3.png")}
                    />
                    {/* SVG Illustration */}
                    <figure className={classes.main_picture}>
                      <svg
                        data-img-paths={
                          "[{&quot;targetId&quot;: &quot;#imageShape1&quot;, &quot;newPath&quot;: &quot;" +
                          require("assets/img/me.jpg") +
                          "&quot;},{&quot;targetId&quot;: &quot;#imageShape2&quot;, &quot;newPath&quot;: &quot;" +
                          require("assets/img/me.jpg") +
                          "&quot;}]"
                        }
                        data-parent="#SVGNonStandardHeroShape"
                        style={{ enableBackground: "new 10 12 878.9 907" }}
                        viewBox="10 12 878.9 907"
                        x="0px"
                        y="0px"
                        xmlSpace="preserve"
                      >
                        <g>
                          <defs>
                            <path
                              d="M299.27,772.72s-24.67-76.08-131.42-51.33C62.82,745.74,81.48,563.56,92,495.71S193.94,92.18,454.77,76.46,658.58,250.62,632.75,306s-78.37,115.53,16.76,295.77-89.33,258.1-129.36,265.84S375.3,912.41,299.27,772.72Z"
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
                              height="1000"
                              id="imageShape1"
                              style={{ overflow: "visible" }}
                              transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                              width="1000"
                              xlinkHref={require("assets/img/me.jpg")}
                            />
                          </g>
                        </g>
                        <g>
                          <defs>
                            <path
                              d="M741.49,643q-2.58-.31-5.17-.4c-12-.45-46.58-14.37-79.24-71.85-17.81-31.35-47.32-96.41-37.88-167.21,7.84-58.79,38.38-97.1,48.34-130.64,24.82-83.61,66.62-77.07,98-77.07,15.93,0,31.1,14.82,39.21,26.39,11.55,16.48,19.72,46.24-9.1,93.32-60.66,99.07,14.09,139.33-.93,239.68C781.72,641.8,750,644,741.49,643Z"
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
                              id="imageShape2"
                              style={{ overflow: "visible" }}
                              transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                              width="1000"
                              xlinkHref={require("assets/img/me.jpg")}
                            />
                          </g>
                        </g>
                      </svg>
                    </figure>
                    {/* End SVG Illustration */}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        </Container>
      </>
    );
  }
}

export default Intro;
