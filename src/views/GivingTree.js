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


class GivingTree extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("giving-tree");
  }
  componentWillUnmount() {
    document.body.classList.remove("giving-tree");
  }
  render() {
    return (
      <>
        <ColorNavbar />
        <div className="wrapper" ref="wrapper">
          <div className="section">
            <Container>
              <Row className="space-70"/>
                <p className="project-type">Concept Idea</p>
                <br/>
                <p className="project-title">The Giving Tree: Democratizing Charitable Giving</p>
              <Row>
                <img
                  alt="..."
                  className="project-image"
                  src={require("assets/img/giving-tree.png")}
                />
              </Row>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <br/>
                  <p>
                    Partners: David Friedman, Hakeem Angulu, Dasha Kozhevnikova
                  </p>
                  <h3 className="title">
                    Problem Statement
                  </h3>
                  <p>
                    Individuals want to donate to local charities, but struggle to integrate charitable giving into their everyday lives and unsure precisely how their donations impact the local community. Any solution has to be accessible, easy to use and free to users. 
                  </p>
                  <br/>
                  <h3 className="title">
                    Existing Solutions
                  </h3>
                  <p>
                    Freerice- this UN World Food Programme web application allows users to play trivia games and consequently make donations to UNICEF while doing so.
                  </p>
                  <br/>
                  <p>
                    CharityWalk- this mobile application allows users to integration charitable giving into their daily workout routines.
                  </p>
                  <br/>
                  <p>
                    GiveLify- this financial application allows users to find local religious institutions and donate directly through the app.
                  </p>
                  <br/>
                  <h3 className="title">
                    Defining the User
                  </h3>
                  <p>
                    Target Users:
                    <ul>
                      <li>Individuals who want to donate to local charities</li>
                      <li>Charitable individuals who don't know which organizations to donate to or how to find them</li>
                      <li>Users of all financial backgrounds, regardless of financial capability</li>
                    </ul>
                  </p>
                  <br/>
                  <h3 className="title">
                    Defining the Goal
                  </h3>
                  <p>
                    Our application aims to democratize charitable giving, and therefore our solution must have the following:
                    <ul>
                      <li>Simple integration into users' daily habits</li>
                      <li>Large community network capabilities</li>
                      <li>Transparency between donors and charitable organizations</li>
                    </ul>
                  </p>
                  <br/>
                  <h3 className="title">
                    Proposing a Solution
                  </h3>
                  <p>
                  The proposed application is a charitable giving application that highlights a single local charity each day based on each user’s location and preferences. Initially, we intended to promote the same charity to all users each day; however, following feedback from the external evaluators we realize the app may be more effective if we cater the featured charity specifically to a user’s preference.  The application would prompt the user with a notification each day that shares the selected charity’s name, description, and provide the user with the ability to donate to their cause or become further involved. Feedback from various users indicated that users may want to become involved with charities in ways other than just donating. For example, users may want to promote a specific cause to their friends, help raise money for a charity, or volunteer their time working for the organization. 
                  </p>
                  <br/>
                  <p>
                  The application also features a select number of trivia questions each day related to the highlighted charity or cause and based on the number of correct answers there would be a donation made to the highlighted charity (paid for by sponsorships). However, beyond the daily charity spotlight, users would also have the ability to search through the charity database to donate to any of the available charities at any given time. The search tool would be organized by history, so users could scroll through and see charities that were highlighted on previous days (the user can also just search for charities by name).
                  </p>
                  <br/>
                  <p>
                  The purpose of this application would be to provide users with a bite-size, simple way to donate to local causes, as well as to simply become more informed about local charities. 
                  </p>
                </Col>
              </Row>
                <Row className="space-50"/>
                <PictureFormat
                  title="Home Page Navigation"
                  source={require("assets/img/giving-tree1.png")}
                />
                <Row className="space-50"/>
                <PictureFormat
                  title="Trivia Flow"
                  source={require("assets/img/giving-tree2.png")}
                />
                <Row className="space-50"/>
                <PictureFormat
                  title="Donation Flow"
                  source={require("assets/img/giving-tree3.png")}
                />
            </Container>
          </div>
        </div>
      </>
    );
  }
}

export default GivingTree;
