import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ColorNavbar from '../Navbars/ColorNavbar';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footers/Footer';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <ColorNavbar/>
                <Intro/>
                <About/>
                <Projects/>
                <Footer/>
            </Aux>
        );
    }
}

export default Layout;