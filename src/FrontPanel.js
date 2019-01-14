import React, { Component } from 'react';
import Screen from './Screen'

/* The object that contains all the necessary information about the products */

const products = [
  {id: "1", value: 2, color: "#FCA9A8"},
  {id: "2", value: 3, color: "#4E7082"},
  {id: "3", value: 2.5, color: "#8DBDC4"},
  {id: "4", value: 5.5, color: "#BD547A"},
  {id: "5", value: 2.75, color: "#3566A2"},
  {id: "6", value: 1.25, color: "#F4EDD8"},
  {id: "7", value: 7.5, color: "#9E3C7E"},
  {id: "8", value: 2, color: "#3D3269"},
  {id: "9", value: 4.25, color: "#DCAF68"}
]

class FrontPanel extends Component {
  constructor(){
    super()
    this.clearMessage = this.clearMessage.bind(this);
    this.state = {
        credit: 0,
        query: "",
        message: "Please select a product!"
      }
  }

/* function to clear the whole screen */
clearScreen = () => {
    this.setState({
      credit: 0,
      query: "",
      message: "Please select a product!"
    })
  }
/* function to add credit in the vending machine */
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

clearMessage = () => {
  this.setState({message: "Please select a product!"})
}

buyMessage = () => {
  this.setState({ message: "Thank you for your purchase!"})
  setTimeout( () => {this.clearMessage()},2000)
  }

changeColor = (id) => {
  var newID = id - 1;
  this.refs.product.style.backgroundColor = products[newID].color;
}
resetColor = () => {
  this.refs.product.style.backgroundColor = "#0b0b0b";
}


buy = () => {
  var currentQuery = this.state.query
  var product = products.filter(number => number.id === currentQuery);
  var money = this.state.credit;
  if (product && product[0] && money >= product[0].value) {
    this.calculateRest(money, product[0].value);
    this.clearQuery();
    this.buyMessage();
    this.changeColor(currentQuery);
  }
  else if(product.length !== 1){
    this.setState({ message: "Please choose a different product"})
  }
  else {
    this.setState({ message: "You don't have enought money!"})
  }
}

  render() {

    return (
      <div>

          <Screen
            credit={this.state.credit}
            query={this.state.query}
            message={this.state.message}/>
          <div className='buttons'>
            <button className="button" onClick={this.addCredit}>Add Credit</button>
            <button className="button" onClick={this.clearScreen}>Clear</button>
            <button className="button" onClick={this.buy}>Enter</button>
            <button className="button" onClick={this.clearScreen}>Take Change</button>
            <button className="button" onClick={this.clearQuery}>Clear Selection</button>
          </div>

          <div className="keybord-layout">
            <div className="keybord">
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="1">1</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="2">2</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="3">3</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="4">4</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="5">5</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="6">6</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="7">7</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="8">8</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="9">9</button>
              <button className="button" onClick={e => this.addToQuery(e.target.id)} id="0">0</button>
            </div>
          </div>
          <div className="opening" ref="product" onClick={this.resetColor} title="Click me to grab product">
          </div>
      </div>
    )
  }
}

export default FrontPanel;
