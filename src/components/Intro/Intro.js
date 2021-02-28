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
                      className=''
                      src={require("assets/img/JackCartoon.png")}
                    />
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
