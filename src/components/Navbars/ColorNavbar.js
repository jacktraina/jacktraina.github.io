import React from "react";
import { Link } from "react-router-dom";
import classes from "./ColorNavbar.module.css";
import CloseIcon from '@material-ui/icons/Close';

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
import { Divider } from "@material-ui/core";

class ColorNavbar extends React.Component {
  state = {
    navbarColor: classes.navbarTransparent
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
        navbarColor: classes.navbarColor
      });
    } else if (
      document.documentElement.scrollTop < 50 ||
      document.body.scrollTop < 50
    ) {
      this.setState({
        navbarColor: classes.navbarTransparent
      });
    }
  };
  render() {
    return (
      <>
        <Navbar className={classes.navbar + " " + classes.fixedTop + " " + this.state.navbarColor} expand="lg">
          <Container>
            <div className={classes.navbarTranslate}>
              <NavbarBrand id="tooltip6619950104">
                <Button to={{ pathname: "https://www.facebook.com/jacktraina"}} tag={Link} target="_blank" className={classes.navButton} color="facebook">
                  <div className={classes.btnNav}>
                    <i class="fa fa-facebook"/>
                  </div>
                </Button>
                <Button to={{ pathname: "https://www.linkedin.com/in/jacktraina"}} tag={Link} target="_blank" className={classes.navButton} color="linkedin">
                  <div className={classes.btnNav}>
                    <i class="fa fa-linkedin" />
                  </div>
                </Button>
                <Button to={{ pathname: "https://www.github.com/jacktraina"}} tag={Link} target="_blank" className={classes.navButton} color="github">
                  <div className={classes.btnNav}>
                    <i class="fa fa-github" />
                  </div>
                </Button>
                <Button 
                  className={classes.resumeButton} 
                  to={{ pathname: "https://drive.google.com/file/d/101gvsMyzP1-sW2ydw2HO3Z_jaiMInrp4/view?usp=sharing"}} 
                  tag={Link} 
                  target="_blank"
                  >
                  Resume
                </Button>
                <Link 
                  className={classes.name} 
                  to={{ pathname: "https://drive.google.com/file/d/101gvsMyzP1-sW2ydw2HO3Z_jaiMInrp4/view?usp=sharing"}} 
                  tag={Link} 
                  target="_blank">
                  Jack Traina
                </Link>
              </NavbarBrand>
              <button className={classes.navbarToggler} id="navigation">
                <span className={classes.navbarBar} />
                <span className={classes.navbarBar} />
                <span className={classes.navbarBar} />
              </button>
            </div>
            <UncontrolledCollapse navbar toggler="#navigation" 
              style={{
                width: "50%", 
                right: "0", 
                left: "auto",
                paddingTop: "0.8rem",
                paddingRight: "0.5rem"
              }}>
              <div className={classes.navbarCollapseHeader}>
                <Row>
                  <Col className={classes.collapseBrand} xs="6">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <span/>
                    </a>
                  </Col>
                  <Col className={classes.collapseClose + " " + classes.textRight} xs="6">
                    <button className={classes.navbarToggler} style={{color: "white"}}id="navigation">
                      <CloseIcon/>
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className={classes.mlAuto + " " + classes.sideBar}>
                <div className="nav_item">
                  <a href="/home#intro" className={classes.navLink}>
                    <p>Home</p>
                  </a>
                </div>
                <NavItem>
                  <a href="/home#about" className={classes.navLink}>
                    <p>About Me</p>
                  </a>
                </NavItem>
                <NavItem>
                  <a href="/home#projects" className={classes.navLink}>
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
