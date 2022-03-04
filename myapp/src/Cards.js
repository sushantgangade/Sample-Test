import react from "react";
import "./App";

const Cards = ({MenuData}) => {

    return(

        <>
        <div className="Cards_list">
        {MenuData.map((curElem) => { 
            return(
                <>
                <div className="container_main">
                <h1>1</h1>
                <h2>Samosa</h2>
                <h3>Breakfast</h3>
                <p>Loremorem Ipsum is simply dummy text of  the printing and typesetting industry </p>
                <button className="btn btn-primary" >OrderNow</button>
        </div>
               
    <div className="container_main">
                <h1>2</h1>
                <h2>Sandwich</h2>
                <h3>Breakfast</h3>
                <p>Loremorem Ipsum is simply dummy text of  the printing and typesetting industry </p>
                <button className="btn btn-primary" >OrderNow</button>
    </div>

     <div className="container_main">
                <h1>3</h1>
                <h2>Pizza</h2>
                <h3>Breakfast</h3>
                <p>Loremorem Ipsum is simply dummy text of  the printing and typesetting industry </p>
                <button className="btn btn-primary" >OrderNow</button>
        </div>
        </>
        
       
            )
        
        }
         )}
         
        </div>
      
        </>
    )

}
export default Cards;