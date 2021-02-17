import React from "react";
import classes from "./Projects.module.css";
import "./Projects.module.css";
import Arrow from '@material-ui/icons/ArrowForwardIos';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';

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
        <Container className={classes.container}>
          <Row>
            <Col className={classes.projOverview}>
              <Card className={classes.projContainer}>
                <Row>
                  <Col lg="4">
                    <div className="">
                      <img
                        alt="..."
                        className={classes.figma}
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
                      <p className={classes.projectDescription}>
                        {props.description}
                      </p>
                      <Button 
                        className={classes.projectButton}
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
        <div id="projects">
          <div 
            className={classes.projects}>
            <Container>
              <Row>
                <Col>
                  <div className={classes.myProjects}>
                    <br/>
                    <h2 className={classes.title}>My Projects</h2>
                  </div>
                </Col>
              </Row>
              <Nav
                className={classes.navPills + " " + classes.notPhone}
                pills
                role="tablist"
              >
                <NavItem style={{margin: "auto"}}>
                  <NavLink
                    className={this.state.activeTab === "1" ? classes.navItemActive : classes.navItem}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Concept
                    <i className="tim-icons icon-heart-2"/>
                    The Giving Tree
                  </NavLink>
                </NavItem>
                <NavItem style={{margin: "auto"}}>
                  <NavLink
                    className={this.state.activeTab === "2" ? classes.navItemActive : classes.navItem}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Project
                    <i className="tim-icons icon-atom" />
                    React Portfolio
                  </NavLink>
                </NavItem>
                <NavItem style={{margin: "auto"}}>
                  <NavLink
                    className={this.state.activeTab === "3" ? classes.navItemActive : classes.navItem}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    Concept
                    <i className="tim-icons icon-istanbul" />
                    Touro
                  </NavLink>
                </NavItem>
                <NavItem style={{margin: "auto"}}>
                  <NavLink
                    className={this.state.activeTab === "4" ? classes.navItemActive : classes.navItem}
                    onClick={() => {
                      this.toggle("4");
                    }}
                  >
                    Project
                    <i className="tim-icons icon-video-66" />
                    Stop Motion Film
                  </NavLink>
                </NavItem>
                
              </Nav>
              <TabContent
                activeTab={"project" + this.state.activeTab}
                className= {classes.notPhone}
              >
                <TabPane tabId="project1">
                  <Row>
                    <ProjectSummary
                      title="Concept: The Giving Tree"    
                      description="For this project, our group aimed to reinvent the process of charitable giving and create a platform that promotes engaging, simplified giving for a large user base. We conducted interviews with frequent charitable donors, as well as the head of a local non-profit organization, and found a common thread amongst the group: people give to charity based on familiarity and convenience. Thus, this formed the basis for The Giving Tree."
                      screenshot={require("assets/img/charity-app.png")}
                      link="projects/giving-tree"
                    />
                  </Row>
                </TabPane>
                <TabPane tabId="project2">
                  <Row>
                    <ProjectSummary
                        title="Personal React Portfolio"    
                        description="In order to illustrate some of my design and technical work, I decicided to teach myself React.JS and build out an entire online portfolio. Included in this website are some of school projects, product concept ideas, creative endeavors, and work projects."
                        screenshot={require("assets/img/fullpage.png")}
                        link="projects/react-portfolio"
                      />
                  </Row>
                </TabPane>
                <TabPane tabId="project3">
                  <Row>
                    <ProjectSummary
                        title="Touro"    
                        description="Created in our Product Design class, this mobile app concept caters to tourists visiting any college campus, providing a unique, individual campus visit. The application leverages modern AR technology seen in apps like Pokemon GO and Harry Potter: Wizards Unite to help users orient themselves around spaces and to create an entirely interactive experience."
                        screenshot={require("assets/img/iphone-touro.png")}
                        link="projects/touro"
                      />
                  </Row>
                </TabPane>
                <TabPane tabId="project4">
                  <Row>
                      <ProjectSummary
                          title="Stop-Motion Animated Video"    
                          description="This Stop Motion video was created as the final project for the course SLS12: Understanding Darwinism, a course that considers the theoretical and historical complexities of Charles Darwin's theory of evolution. With complete creative control, my partner and I decided to create a stop motion film, a medium that neither of us had any prior experience with"
                          screenshot={require("assets/img/iphone-darwin.png")}
                          link="projects/stop-motion"
                        />
                    </Row>
                </TabPane>
              </TabContent>
              <Container className={classes.phone + " " + classes.contain}>
                <ProjectCarousel />
              </Container>
            </Container>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Projects;