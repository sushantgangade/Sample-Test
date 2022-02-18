import React, { Component } from "react";
import './App.css';


class Menu extends Component{
    render (){
        return(
            <>
                <div className="container">
                    <div className="sub_c">
                        <div className="type">
                    <div class="card" >
                        <img src="samosa.jpg" />
                        <div class="card-body">
                            <p>Samosa</p>
                        </div>
                    </div>
                    </div>

                    <div className="type1">
                    <div class="card" >
                        <img src="burger.jpg" />
                        <div class="card-body">
                            <p>Burger</p>
                        </div>
                    </div>
                    </div>
                    
                    <div className="type2">
                    <div class="card" >
                        <img src="sandwich.jpg" />
                        <div class="card-body">
                            <p>Sandwich</p>
                        </div>
                    </div>
                </div>

                <div className="type3">
                    <div class="card" >
                        <img src="pizza.jfif" />
                        <div class="card-body">
                            <p>Pizza</p>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Menu;