import React, { Component } from "react";
import './App.css';
import List from  "./List";
import Cards from "./Cards";


    const Menu = () =>{
        const[MenuData , setMenuData]= React.useState(List);
       
        return(
            <>
             <Cards MenuData={MenuData}/>
            
            </>
        );
    };

export default Menu;