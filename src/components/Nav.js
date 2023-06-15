import { useState } from "react";

export const Nav = ({current,high})=>{
    
    return(
        <div>
        <header>
            <nav>
               <h1>Overwatch Memory Game</h1>
               <p>Current Score: {current}</p>
               <p>High Score: {high}</p> 
            </nav>
        </header>
        
        </div>
    );
};