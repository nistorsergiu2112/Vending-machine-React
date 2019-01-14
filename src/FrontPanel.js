import React, { Component } from 'react';
import Screen from './Screen'
const prices = [
  {id: "1", value: 2},
  {id: "2", value: 3},
  {},
  {},
  {},
  {},
  {},
  {},
  {}
]

class FrontPanel extends Component {
  constructor(){
    super()
    this.state = {
        credit: 0,
        query: ""
      }
  }

/*function to clear query*/
clearScreen = () => {
    this.setState({
      credit: 0,
      query: ""
    })
  }
/* function to add credit */
addCredit = (credit) => {
  this.setState(prevState => ({
  credit: prevState.credit + 1
}), () => {
  this.onChangeCredits()
})}
/* function that manages the keybord + added onChangeQuery in the callback */
addToQuery = (id) => {
       this.setState(prevState => ({
          query: prevState.query + id
       }), () => {
       this.onChangeQuery()
    })
  }
/* function that sends data to parent */
 onChangeQuery = () => {
  this.props.handlerFromParent(this.state.query)
}
/* function that sends credits to parent */
onChangeCredits = () => {
  this.props.creditsHandler(this.state.credit)
}
calculateRest = (money, cost) => {
  let newCredit = money - cost;
  this.setState({ credit: newCredit})
}
clearQuery = () => {
    this.setState({
      query: ""
    })
  }

buy = () => {
  var currentQuery = this.state.query
  var product = prices.filter(number => number.id === currentQuery);
  var money = this.state.credit;
  if (money >= product[0].value) {
    this.calculateRest(money, product[0].value);
    this.clearQuery();
  }
  else {
    console.log("you can't buy");
  }
}

  render() {

    return (
      <div>

          <Screen
            credit={this.state.credit}
            query={this.state.query}/>
          <div className='buttons'>
            <button className="button" onClick={this.addCredit}>Add Credit</button>
            <button className="button" onClick={this.clearScreen}>Clear</button>
            <button className="button" onClick={this.buy}>Enter</button>
            </div>

          <div className="keybord-layout">
          <div className="keybord">
          <button onClick={e => this.addToQuery(e.target.id)} id="1">1</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="2">2</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="3">3</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="4">4</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="5">5</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="6">6</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="7">7</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="8">8</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="9">9</button>
          <button onClick={e => this.addToQuery(e.target.id)} id="0">0</button>
          </div>
          </div>
      </div>
    )
  }
}

export default FrontPanel;
