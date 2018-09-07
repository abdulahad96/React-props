import React, { Component } from 'react';
class Defaulbulb extends Component{
    constructor(props){
        super(props);
        this.broken = this.broken.bind(this);
    }
    broken(){
        this.props.braker({status:"broke"})
    }
    render(){
        return (
            <div className="App">
            <img src={this.props.src} onClick={this.broken}/>
            </div>
        )
    }
}
export default Defaulbulb;