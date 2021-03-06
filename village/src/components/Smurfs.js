import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Smurf from './Smurf';

class Smurfs extends Component {
  
  render() {
    return (
      <div className="Smurfs">
        {/* <Link to="/form">Let's add a new smurf!</Link> */}
        <h1 style={smurfsHeader}>Smurf Village</h1>
        <ul style={listStyles}>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                updateInfo={this.props.updateInfo}
              />
              // <Route path="/smurfs/:id" render={(props) => (
              //   <Smurf {...props} name={smurf.name} id={smurf.id} age={smurf.age} height={smurf.height} key={smurf.id} />
              // )}  />
            );
          })}
        </ul>
      </div>
    );
  }
}

const smurfsHeader ={
  textAlign: "center",
  fontSize: "50px",
}

const listStyles = {
  marginRight: "40px"
}


Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
