import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
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


class Touro extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("tour");
  }
  componentWillUnmount() {
    document.body.classList.remove("tour");
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div ref="wrapper">
          <div className={classes.section}>
            <Container>
              <Row className={classes.row70}/>
                <p className={classes.projectType}>Concept Idea</p>
                <br/>
                <p className={classes.projectTitle}>Touro: Lost No Longer</p>
              <Row>
                <img
                  alt="..."
                  className={classes.projectImage}
                  src={require("assets/img/touro.png")}
                />
              </Row>
              <Row>
                <Col className={classes.colDescription}>
                  <br/>
                  <p>
                    Partners: David Friedman, Amanda Westwort, Dasha Kozhevnikova
                  </p>
                  <h3 className={classes.title}>
                    Problem Statement
                  </h3>
                  <p>
                    Tourists visiting college campuses hope to learn more about the campus through exploration and hands-on experiences, which includes visiting landmarks, attending campus events, and hearing first-hand accounts of student experiences. However, our stakeholders struggle to determine which attractions/events on campus are available to the public, which attractions most cater to their interests, and how to navigate the campus. Currently, there does not exist a unified platform for tourists, who speak a variety of languages, to receive this information. 
                  </p>
                  <br/>
                  <h3 className={classes.title}>
                    Existing Solutions
                  </h3>
                  <p>
                    In-Person Tours- a timeless endeavor for people visting college campuses, physical tours provide a less personal yet interactive means of visting new places.
                  </p>
                  <br/>
                  <p>
                    Google Translate- although not made directly for tours, Google Translate allows individuals to understand new, foreign environments.
                  </p>
                  <br/>
                  <p>
                    Pokemon GO- this application re-imagined artificial reality technology and brought it to the mobile market.
                  </p>
                  <br/>
                  <h3 className={classes.title}>
                    Defining the User
                  </h3>
                  <p>
                    Target Users:
                    <ul>
                      <li>Individuals visiting college campus for educational purposes / Prospective students</li>
                      <li>Tourists visiting college campuses for pleasure</li>
                      <li>Tourists who specifically have no itenerary</li>
                    </ul>
                  </p>
                  <br/>
                  <h3 className={classes.title}>
                    Defining the Goal
                  </h3>
                  <p>
                    Our application aims to create a unified platform for tourism, and thus our solution must include the following:
                    <ul>
                      <li>Simple mobile access for all operating systems</li>
                      <li>Language and Culture agnostic</li>
                      <li>Interactions that compliment, rather than detract from, physically visiting a space</li>
                    </ul>
                  </p>
                  <br/>
                  <h3 className={classes.title}>
                    Proposing a Solution
                  </h3>
                  <p>
                    The proposed solution is an application that highlights landmarks and events on a map of campus, with additional information and short videos becoming available for a given landmark when a user is nearby. The videos will each be associated with a different landmark, and users will be unable to access the video until they are within a specified range (close enough to physically see the landmark). Specifically, the videos will feature both audio and subtitles, and will not require extensive visuals. This permits a wide range of audiences to interact with the videos, regardless of language capabilities or visual impairment. This approach will help a user orient themselves on campus, find interesting landmarks and events near them, and receive supplementary information in a convenient manner.
                  </p>
                  <br/>
                  <p>
                    The main feature of our app will be the map feature highlighting points of interest and events. It will achieve this by live location tracking on the college campus, including an updated map that is better geared for walking because it provides a 3-dimensional, up-close orientation rather than an overview map. The app needs to be simple and easy to use, so we will highlight important landmarks on campus using colorized 3D animations of those landmarks to prompt the user to walk toward each of the landmarks. As they approach the landmarks, users will have the ability to unlock a video of a student offering both some historical information and personal experience about the location. This way, we give users the opportunity to explore, learn, and hear first-hand accounts about Harvard from students. Through a simplified set of landmarks and easy to use interface, we undertake the core tension of relaying the right information in a unified and engaging approach.
                  </p>
                  <br/>
                  <p>
                    Our app will also support a collection of popular languages – the language will either be automatically selected from current phone settings, or set through a quick onboarding step if the former is technically not feasible. By giving users the opportunity to consume this information in various languages, the app is more accessible to a larger base of users.
                  </p>
                </Col>
              </Row>
                <Row className={classes.row50}/>
                <PictureFormat
                  title="Home Page Navigation"
                  source={require("assets/img/tour-home.png")}
                />
                <Row className={classes.row50}/>
                <PictureFormat
                  title="Individual Site Visit"
                  source={require("assets/img/tour-site.png")}
                />
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default Touro;
