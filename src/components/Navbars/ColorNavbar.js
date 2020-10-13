import React from "react";
import { Link } from "react-router-dom";
import "./ColorNavbar.css";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class ColorNavbar extends React.Component {
  state = {
    navbarColor: "navbar-transparent"
  };
  componentDidMount() {
    window.addEventListener("scroll", this.changeNavbarColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeNavbarColor);
  }
  changeNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 49 ||
      document.body.scrollTop > 49
    ) {
      this.setState({
        navbarColor: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 50 ||
      document.body.scrollTop < 50
    ) {
      this.setState({
        navbarColor: "navbar-transparent"
      });
    }
  };
  render() {
    return (
      <>
        <Navbar className={"fixed-top " + this.state.navbarColor} expand="lg">
          <Container>
            <div className="navbar-translate">
              <NavbarBrand id="tooltip6619950104">
                <Button to={{ pathname: "https://www.facebook.com/jacktraina"}} tag={Link} target="_blank" className="btn-icon" color="facebook">
                  <i className="fab fa-facebook" />
                </Button>
                <Button to={{ pathname: "https://www.linkedin.com/in/jacktraina"}} tag={Link} target="_blank" className="btn-icon" color="linkedin">
                  <i className="fab fa-linkedin" />
                </Button>
                <Button to={{ pathname: "https://www.github.com/jacktraina"}} tag={Link} target="_blank" className="btn-icon" color="github">
                  <i className="fab fa-github" />
                </Button>
                <Button 
                  className="resume-button" 
                  to={{ pathname: "https://drive.google.com/file/d/1PSO5Fjm5jAKqz2IfExXMelka0gyX0wJW/view?usp=sharing"}} 
                  tag={Link} 
                  target="_blank"
                  >
                  Resume
                </Button>
              </NavbarBrand>
              <button className="navbar-toggler" id="navigation">
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation">
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <span></span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button className="navbar-toggler" id="navigation">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="ml-auto" navbar>
              <NavItem>
                  <a href="/home#intro" className="nav-link">
                    <p>Home</p>
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/home#about" className="nav-link">
                    <p>About Me</p>
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/home#projects" className="nav-link">
                    <p>Projects</p>
                  </a>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ColorNavbar;
