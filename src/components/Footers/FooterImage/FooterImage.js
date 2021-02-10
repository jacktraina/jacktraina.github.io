import React from 'react';
import classes from './FooterImage.module.css';

const FooterImage = (props) => {
    return (
        <img
            title={props.title}
            className={props.title === "Adobe Illustrator" ? classes.imgFooterAdobe : classes.imgFooter}
            src={props.src}
        >
        </img>
    )
}

export default FooterImage;