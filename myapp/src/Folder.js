import React from "react";
import { Component } from "react";
import './App.css';

class Folder extends Component{


    state = {
        name:"Tasty Bites",
        
    };
    render() {
            return (
            <>
            <h1 >{this.props.headeName} </h1>
            <h2>The {this.state.name} & chats as well Veg and Non- Veg Available , Please order Now!  </h2>
            
            </>
            )
    }
}

export default Folder;