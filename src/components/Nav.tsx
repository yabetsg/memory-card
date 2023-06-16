import { useState } from "react";


interface NavProps{
    current:number;
    high:number;
}
export const Nav: React.FC<NavProps> = ({current,high})=>{
    
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