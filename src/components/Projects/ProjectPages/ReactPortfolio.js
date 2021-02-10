import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ColorNavbar from '../../Navbars/ColorNavbar';
import classes from "./ProjectDescription.module.css";

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


class ReactPortfolio extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("react-portfolio");
  }
  componentWillUnmount() {
    document.body.classList.remove("react-portfolio");
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
                <p className={classes.projectTitle}>React Portfolio: Beyond the Resume</p>
              <Row>
                <img
                  alt="..."
                  className={classes.projectImage}
                  src={require("assets/img/react-portfolio.png")}
                />
              </Row>
              <Row>
                <Col className={classes.colDescription}>
                  <br/>
                  <h3 className={classes.title}>
                    Problem Statement
                  </h3>
                  <p>
                    Recruiters attempt to use all resources at their disposal to understand potential candidates; however, they are often limited by the brevity of resumes and other ambiguities in the process.
                  </p>
                  <br/>
                  <h3 className={classes.title}>
                    Existing Solutions
                  </h3>
                  <p>
                    Resumes- often too short to reveal truly valuable insights into candidates.
                  </p>
                  <br/>
                  <p>
                    Interviews- although helpful for understanding behavioral aspects of candidates, interviews often neglect concrete projects by the candidates.
                  </p>
                  <br/>
                  <p>
                    Github- illustrates technical projects, but does not convey visual, easily understand information.
                  </p>
                  <br/>
                  <h3 className={classes.title}>
                    Defining the User
                  </h3>
                  <p>
                    Target Users:
                    <ul>
                      <li>Recruiters who want to learn more about me</li>
                      <li>Other job candidates looking for ideas of how to present their work</li>
                      <li>Anyone who wants to collaborate on projects!</li>
                    </ul>
                  </p>
                  <br/>
                  <h3 className={classes.title}>
                    Defining the Goal
                  </h3>
                  <p>
                    This web application aims to illustrate my candidacy to potential employers, and therefore the solution must have the following:
                    <ul>
                      <li>Transparent displays of information</li>
                      <li>Complex code to illustrate my technical skills</li>
                      <li>Beautiful Design</li>
                    </ul>
                  </p>
                  <br/>
                  <h3 className="title">
                    Proposing a Solution
                  </h3>
                  <p>
                  The resulting solution is a React-built portfolio that features beautiful design and strong technical demonstrations. Although almost the entire website is coded from scratch, inspiration for the inital theme came from Creative Tim's BLK Design.
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

export default ReactPortfolio;
