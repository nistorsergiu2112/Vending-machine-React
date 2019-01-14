import React, { Component } from 'react';
import FrontPanel from './FrontPanel'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleDataQuery = this.handleDataQuery.bind(this);
    this.handleCredits = this.handleCredits.bind(this);
    this.state = {
      /* I expected to use these but ended up not using them
      and i only kept them to show that i know how get from child to parent */
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
        <header className="title">vending machine</header>
        <div className="glass">
          <ul className="grid-9">
            <li className="text product-1" id="1">ITEM 1  2$</li>
            <li className="text product-2" id="2">ITEM 2  3$</li>
            <li className="text product-3" id="3">ITEM 3  2,5$</li>
            <li className="text product-4" id="4">ITEM 4  5,5$</li>
            <li className="text product-5" id="5">ITEM 5  2,75$</li>
            <li className="text product-6" id="6">ITEM 6  1,25$</li>
            <li className="text product-7" id="7">ITEM 7  7,5$</li>
            <li className="text product-8" id="8">ITEM 8  2$</li>
            <li className="text product-9" id="9">ITEM 9  4,25$</li>
            </ul>

      </div>
        <FrontPanel handlerFromParent={this.handleDataQuery}
                    creditsHandler={this.handleCredits}
                    />

      </div>
    );
  }
}

export default App;
