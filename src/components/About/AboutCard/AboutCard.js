import React, { Component }from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./AboutCard.css";



class AboutCard extends Component {
  render () {
    return (
        <>
          <Card className={"card-box"}>
            <CardContent id={this.props.title}>
                <strong className="card-title">{this.props.title}</strong><br/>
                <p className="card-description">
                  {this.props.description.map((item, index) => {
                    if (this.props.title==="Education" && index === 3) {
                      return <><strong>Coursework: </strong>{item}<br/></>;
                    }
                    else {
                      return <>{item}<br/></>
                    }
                  })}
                </p>
            </CardContent>
        </Card>
      </>
    );
  }  
}

export default AboutCard;