import React, { Component } from "react";
import './Wheel.css';


 export default class Wheel extends Component{
     state = {
         name : "circle"

     }
     startRotation = () => {
         this.setState({
             name: "circle start-rotate"
         });
         console.log('startRotation-360 deg');
         setTimeout(() => {
            this.setState({
                name:"circle start-rotate stop-rotate 360"
            });
            
        },Math.floor(Math.random()*3000)+1);
        
     }
     
     render(){
         return(
             <>
             <div id="wheel_main">
                 <div className="mark"></div>
                 <ul className={this.state.name}>
                    <li>
                       <div
                         className="text"  
                         spellCheck="false">
                       1</div>
                        
                     </li>

                     <li>
                     <div
                         className="text"                    
                         spellCheck="false">
                       2</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"
                         spellCheck="false">
                       3</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"
                         spellCheck="false">
                       4</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"                   
                         spellCheck="false">
                       5</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"                    
                         spellCheck="false">
                       6</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"                      
                         spellCheck="false">
                       7</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"                      
                         spellCheck="false">
                       8</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"                  
                         spellCheck="false">
                       9</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"
                       
                         spellCheck="false">
                       10</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"                      
                         spellCheck="false">
                       11</div>
                      
                     </li>

                     <li>
                     <div
                         className="text"            
                         spellCheck="false">
                       12</div>
                      
                     </li>
                     
                 </ul>
                  
             </div>
            
              <button 
             className="spin"
             onClick={this.startRotation}>Spin</button>
             </>
         )
     }
 }
