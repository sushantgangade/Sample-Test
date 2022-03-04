
import React, {useState} from "react";

function Count(){
    const [Count, setCount]= useState(0);
    const handleIncrement = () =>{
        setCount (Count + 1);
    }

    const [Count1, setCounts]= useState(0);
    const handleIncrements = () =>{
        setCounts (Count1 - 1);
    }
    return(
        <>

        <h4>Count Up : {Count}</h4>
        <button onClick={handleIncrement}>Increase </button>


        <h4>Count Up : {Count1}</h4>
        <button onClick={handleIncrements}>Decrease </button>


        </>

        
        )
}
export default Count;