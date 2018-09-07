import React, { Component } from 'react';
class Brokebulb extends Component{
    constructor(props){
        super(props);
        this.joiner = this.joiner.bind(this);
    }
    joiner(){
        this.props.join({status:"default"})
    }
    render(){
        return (
            <div className="App">
            <img src={this.props.src} onClick={this.joiner}/>
            </div>
        )
    }
}
export default Brokebulb;