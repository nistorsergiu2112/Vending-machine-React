import React, { Component } from 'react';
import FrontPanel from './FrontPanel'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleDataQuery = this.handleDataQuery.bind(this);
    this.handleCredits = this.handleCredits.bind(this);
    this.state = {
      fromChildQuery: "",
      fromChildCredits: 0
    }
  }
/* Data handler to get child state */
handleDataQuery(data) {
  this.setState({
    fromChildQuery: data
  });
}
/* Handler for the credits of the child */
handleCredits(credits) {
  this.setState({
    fromChildCredits: credits
  });
}

  render() {
    return (
      <div className="App">
        <div className="glass">
          <ul className="grid-9">
            <li className="text product-1" id="1" value={2}>1</li>
            <li className="text product-2" id="2" value={3}>2</li>
            <li className="text product-3" id="3">3</li>
            <li className="text product-4" id="4">4</li>
            <li className="text product-5" id="5">5</li>
            <li className="text product-6" id="6">6</li>
            <li className="text product-7" id="7">7</li>
            <li className="text product-8" id="8">8</li>
            <li className="text product-9" id="9">9</li>
            </ul>


            <div className="opening">
          </div>
      </div>
        <FrontPanel handlerFromParent={this.handleDataQuery}
                    creditsHandler={this.handleCredits}
                    />

      </div>
    );
  }
}

export default App;
