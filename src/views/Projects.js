/*!

=========================================================
* BLK Design System PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import "./Projects.css";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

function ProjectSummary(props) {
  return (
      <div>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="9">
              <Card className="card-blog card-plain blog-horizontal">
                <Row>
                  <Col lg="4">
                    <div className="card-image">
                      <img
                        alt="..."
                        className="figma"
                        src={props.screenshot}
                      />
                    </div>
                  </Col>
                  <Col lg="8">
                    <CardBody>
                      <CardTitle tag="h3">
                        <a
                          href={props.link}
                        >
                          {props.title}
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        {props.description}
                      </p>
                      <Button 
                        className="btn-primary"
                        href={props.link}
                        >
                        Full Product Specification
                      </Button>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}


class Projects extends React.Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
          {/* ********* PROJECTS********* */}
          <div 
            className="projects-2 project-raised">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center mb-2" lg="8">
                  <br/>
                  <h2 className="title">My Projects</h2>
                </Col>
              </Row>
              <Nav
                className="nav-pills-info nav-pills-icons nav-pills-lg"
                pills
                role="tablist"
              >
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Concept
                    <i className="tim-icons icon-spaceship"/>
                    The Giving Tree
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Project
                    <i className="tim-icons icon-atom" />
                    React Portfolio
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    Project
                    <i className="tim-icons icon-light-3" />
                    Touro
                  </NavLink>
                </NavItem>
                <NavItem className="m-auto">
                  <NavLink
                    className={this.state.activeTab === "4" ? "active" : ""}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    Concept
                    <i className="tim-icons icon-molecule-40" />
                    Groupie
                  </NavLink>
                </NavItem>
                <NavItem className="mx-auto">
                  <NavLink
                    className={this.state.activeTab === "5" ? "active" : ""}
                    onClick={() => {
                      this.toggle("5");
                    }}
                  >
                    Concept
                    <i className="tim-icons icon-planet" />
                    CollegeCall
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent
                activeTab={"project" + this.state.activeTab}
              >
                <TabPane tabId="project1">
                  <Row>
                    <ProjectSummary
                      title="Concept: The Giving Tree"    
                      description="For this project, our group aimed to reinvent the process of charitable giving and create a platform that promotes engaging, simplified giving for a large user base. We conducted interviews with frequent charitable donors, as well as the head of a local non-profit organization, and found a common thread amongst the group: people give to charity based on familiarity and convenience. Thus, this formed the basis for The Giving Tree."
                      screenshot={require("assets/img/charity-app.png")}
                      link="/giving-tree"
                    />
                  </Row>
                </TabPane>
                <TabPane tabId="project2">
                  <Row>
                    <ProjectSummary
                        title="Personal React Portfolio"    
                        description="If you’ve ever wanted to train a machine learning
                        model and integrate it with IFTTT, you now can
                        with a new offering from MateLabs. MateVerse, a
                        platform where novices can spin out machine...If
                        you’ve ever wanted to train a machine learning
                        model and integrate it with IFTTT, you now can
                        with a new offering from MateLabs. MateVerse, a
                        platform where novices can spin out machine..."
                        screenshot={require("assets/img/fullpage.png")}
                        link="/react-portfolio"
                      />
                  </Row>
                </TabPane>
                <TabPane tabId="project3">
                  <div className="space-100" />
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      Add your information here for Project3.
                    </p>
                  </Col>
                  <div className="space-100" />
                </TabPane>
                <TabPane tabId="project4">
                  <div className="space-100" />
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      Add your information here for Project4.
                    </p>
                  </Col>
                  <div className="space-100" />
                </TabPane>
                <TabPane tabId="project5">
                  <div className="space-100" />
                  <Col className="ml-auto mr-auto text-center mt-4" md="8">
                    <p className="description mb-5">
                      Add your information here for Project5.
                    </p>
                  </Col>
                  <div className="space-100" />
                </TabPane>
              </TabContent>
            </Container>
          </div>
          {/* ********* END PROJECTS 2 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Projects;

/*
<Row>
  <Col className="ml-auto mr-auto text-center mt-4" md="8">
    <h3 className="title">Want to see more?</h3>
    <h4 className="description mb-4">
      Check out my Github!
    </h4>
    <Button color="primary" size="lg">
      Github Link
    </Button>
  </Col>
</Row>
*/