import { useState } from "react";


interface NavProps{
    current:number;
    high:number;
}

export const Nav: React.FC<NavProps> = ({current,high})=>{
    
    return(
        <div>
        <header className="h-24">
            <nav className="flex flex-row justify-between h-16 pt-3 pb-3 pr-3 pl-3" >
                <div className="flex gap-9"> <h1 className="font-overwatch text-4xl text-orange-400" >Overwatch</h1>
               <h1 className="text-4xl font-memory tracking-widest text-orange-400">Memory Game</h1></div>
                <div className="flex gap-3">
                      <p className=" bg-blue-500 shadow-lg shadow-blue-500/50 rounded-lg text-center text-white font-bold pt-1 pl-2 pr-2">Current Score: {current}</p>
               <p className="bg-green-600 shadow-lg shadow-blue-500/50 rounded-lg text-center text-white font-bold pt-1 pl-2 pr-2">High Score: {high}</p> 
                </div>
             
               
            </nav>
        </header>
        
        </div>
    );
};