import React, { Component } from 'react';
import logo from './logo.svg';
import Defaultbulb from './screens/defaultbulb'
import Brokebulb from './screens/brokebulb'
import Onbulb from './screens/bulbon'
import './App.css';
 class App extends Component {
  constructor(){
    super();
    this.state = {
      bulb : "https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg",
      status: "default",
      text: "ON"
    }
    this.off = this.off.bind(this);
    this.on = this.on.bind(this);
    this.broke = this.broke.bind(this);
    this.joiner = this.joiner.bind(this);

  }
  off(){
    this.setState({
      bulb:"https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn",
      status: "on",
      text: "OFF"
  })
  }
  on(){
    this.setState({
      bulb : "https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg",
      status: "default",
      text: "ON"
  })
  }
  broke(bro){
    console.log(bro)
this.setState({
  bulb : "https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736",
  status : bro.status
  
})
  }
  joiner(jon){
    this.setState({
      bulb : "https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg",
      status : jon.status,
      text : "ON"
    })
      
  }
   render() {
    const {status , text , bulb} = this.state;
    const src = bulb;
    
     return (
      <div className="App">

    {status === "default" && <Defaultbulb src = {src} braker = {this.broke}/>}
    {status === "on" && <Onbulb src = {src} braker = {this.broke}/>}

    {status === "broke" && <Brokebulb src = {src} join = {this.joiner}/>}

    
    {status === "default" && <button onClick={this.off}>{text}</button>}
    
    {status === "on" && <button onClick={this.on}>{text}</button>}
      
      </div>
    );
  }
}
 export default App;