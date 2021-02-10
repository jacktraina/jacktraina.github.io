import classes from "./ProjectDescription.module.css";
import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from '../../Navbars/ColorNavbar';

function PictureFormat(props) {
  return(
    <div>
      <Col className={classes.colDescription}>
        <br/>
        <p className={classes.projectImageTitle}>{props.title}</p>
      </Col>
      <Row>
        <img
          alt="..."
          className={classes.projectImage}
          src={props.source}
        />
      </Row>
    </div>
  );
}


class StopMotion extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("stop-motion");
  }
  componentWillUnmount() {
    document.body.classList.remove("stop-motion");
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div ref="wrapper">
          <div className={classes.section}>
            <Container>
              <Row className={classes.row70}/>
                <p className={classes.projectType}>Project</p>
                <br/>
                <p className={classes.projectTitle}>What Does it Mean to be Human?<br/>A Stop Motion Animation Film.</p>
              <Row className={classes.row50}/> 
                <div className={classes.vidRow}>
                  <iframe 
                    className={classes.vidRow}
                    width="853" 
                    height="505" 
                    src="https://www.youtube.com/embed/RdBhgXDCt7w" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                  </iframe>
                </div>
              <Row>
                <Col className={classes.colDescription}>
                  <br/>
                  <p>
                    Partner: Alessio Fikre
                  </p>
                  <br/>
                  <h3 className={classes.title}>
                    Description
                  </h3>
                  <p>
                    Throughout the centuries that evolutionary biology has been studied, there have been an innumerable number of theories attempting to explain the odd phenomenon of man descending from ape-like ancestors. Fossil evidence has provided a small glimpse into this poorly understood history, yet it cannot explain everything. The onset of the genetic revolution further explained the evolution of mankind, but science has still yet to come to a consensus on every evolutionary change. This project, in the form of a stop-motion short film, attempts to further unravel the mystery of man’s evolutionary past, highlighting the important stages of human evolution as well as the various theories that exist to explain them.
                  </p>
                  <br/>
                  <p>
                    A Final Project for SLS12: Understanding Darwinism.
                  </p>
                  <br/>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default StopMotion;
