import React, { Component } from 'react';

class Screen extends Component {
  render() {
    return (
      <div className="screen">
      <p>Credits: {this.props.credit}</p>
      <p>Your Pick: {this.props.query}</p>
      <p>This is the message!</p>
      </div>
    )
  }


}




export default Screen;
