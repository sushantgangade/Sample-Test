import React, { useState } from "react";
import App from "./App";
import './App.css';


function Loading (){
    const [isLoading, setLoading] = useState(0);

    const fetchData = () =>{
        setLoading(true);
        setTimeout(()=>{
        setLoading(false);
        },3500)
    }
    return (
        <>
        <div className="part1">
            <div className="part2" >
                {isLoading ? " ":
                (<img src="sandwich.jpg" className="cards" onClick={fetchData}/>)}
                {isLoading ? <div> <h4>fetching your data...!</h4>
                <img className="images"  src="ZZ5H.gif"/> </div> : ''
                }
            </div>
       </div>
        </>
    );
}
export default Loading;