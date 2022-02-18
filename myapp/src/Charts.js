import React, { Component } from "react";
import './App.css';

class Charts extends Component{
    render(){
    return(
        <>
        <div className="List">
            <ul>
                <li>Lunch</li>
                <li>Breakfast</li>
                <li>Time-Pass</li>
                <li>Dinner</li>
                <li>Chats</li>
                <li>Juice</li>
                <li>Ice-Cream</li>
            </ul>

            <button className="btn btn-primary">Order Now</button>
            </div>
        </>
    )
}
}
export default Charts;