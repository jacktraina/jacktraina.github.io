import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import "./ProjectDescription.css";

function PictureFormat(props) {
  return(
    <div>
      <Col className="ml-auto mr-auto" md="8">
        <br/>
        <p className="project-image-title">{props.title}</p>
      </Col>
      <Row>
        <img
          alt="..."
          className="project-image"
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
        <div className="wrapper" ref="wrapper">
          <div className="section">
            <Container>
              <Row className="space-70"/>
                <p className="project-type">Project</p>
                <br/>
                <p className="project-title">What Makes Us Human? A Stop Motion Animation Film.</p>
              <Row className="space-50"/> 
                <div className="vid-row">
                  <iframe 
                    className="vid-row"
                    width="853" 
                    height="505" 
                    src="https://www.youtube.com/embed/RdBhgXDCt7w" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                  </iframe>
                </div>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <br/>
                  <p>
                    Partner: Alessio Fikre
                  </p>
                  <br/>
                  <h3 className="title">
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
