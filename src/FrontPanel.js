import React, { Component } from 'react';
import Screen from './Screen'

class FrontPanel extends Component {
  state = {
      credit: 0,
      query: ""
    }


/*function to clear query*/
  clearQuery = () => {
    this.setState({ credit: 0 })
  }
/* function to add credit */
addCredit = (credit) => {
  this.setState((prevState) => ({
  credit: prevState.credit + 1
}))}
/* function that manages the keybord */
addToQuery = (id) => {
  this.setState((prevState) => ({
  query: prevState.query + this.id
  }))
}

  render() {

    return (
      <div>

          <Screen credit={this.state.credit}/>
          <div className='button'>
            <button onClick={this.addCredit}>Add Credit</button>
            <button onClick={this.clearQuery}>Clear</button>
            <button>Enter</button>
            </div>

          <div className="keybord-layout">
          <div className="keybord">
          <button onClick={() => this.addToQuery(this.id)} id="1">1</button>
          <button onClick={() => this.addToQuery(this.id)} id="2">2</button>
          <button id="3">3</button>
          <button id="4">4</button>
          <button id="5">5</button>
          <button id="6">6</button>
          <button id="7">7</button>
          <button id="8">8</button>
          <button id="9">9</button>
          <button id="0">0</button>
          </div>
          </div>
      </div>
    )
  }
}

export default FrontPanel;
