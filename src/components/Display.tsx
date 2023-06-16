import { ChangeEvent, useEffect, useState } from "react";
import { Card } from "./Card";
import sombra from '../imgs/sombra.png'
import tracer from '../imgs/tracer.png'
import winton from '../imgs/winton.png'
import bastion from '../imgs/bastion.png'
import ashe from '../imgs/ashe.png'
import reaper from '../imgs/reaper.png'
import mercy from '../imgs/mercy.png'
import hanzo from '../imgs/hanzo.png'
import sigma from '../imgs/sigma.png'
import lucio from '../imgs/lucio.png'
import uniqid from 'uniqid'
import { Nav } from './Nav';
export const Display = ()=>{

    type Id = Array<number>;
    type Score = number;
    type Memory = Array<number>;

    const [id,setId] = useState<Id>([]);

    const [currentScore,setCurrentScore] = useState<Score>(0);
    const [highScore,setHighScore] = useState<Score>(0);
    const [memory,setMemory] = useState<Memory>([]);
    const onClick = (e: any)=>{
        let characterAttribute = e.target?.attributes[0];
    
        const characterName = characterAttribute?.nodeValue
       
        randomize();
      
        if(!memory.includes(characterName)){
            setMemory(memory.concat(characterName))
            setCurrentScore(currentScore+1)
        }else{
            setMemory([]);
            setCurrentScore(0);
          
        }
        
        
        
    }
//   TODO: Fix hanzo disappearing on click :(
    
    const randomize = ()=>{ 
          let randomizedArray:number[] = [];
       
        while(randomizedArray.length < 10){ 
            let randomNum = Math.floor(Math.random()*10)
            if(!randomizedArray.includes(randomNum)){
                randomizedArray.push(randomNum);
             }
        };
         setId(randomizedArray);
        
    
    }
    useEffect(()=>{
        setId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    },[])
  


    useEffect(()=>{
        if(currentScore>highScore){
            setHighScore(currentScore);
        }
    },[currentScore])


   

    const randomizedCards= ()=>{
        
        
        const newArr = new Array(10);
        newArr.fill(0)
      const cards = [<Card character='sombra' data_id={id?.[0]} onClick={onClick} src = {sombra} ></Card>, 
        <Card character='bastion' data_id={id?.[1]} onClick={onClick} src = {bastion}></Card>,
        <Card character='winton' data_id={id?.[2]} onClick={onClick} src = {winton} ></Card>,
        <Card character='tracer' data_id={id?.[3]} onClick={onClick} src = {tracer} ></Card>,
        <Card character='ashe' data_id={id?.[4]} onClick={onClick} src = {ashe} ></Card>,
        <Card character='hanzo' data_id={id?.[5]} onClick={onClick} src = {hanzo} ></Card>,
        <Card character='reaper' data_id={id?.[6]} onClick={onClick} src = {reaper} ></Card>,
        <Card character='mercy' data_id={id?.[7]} onClick={onClick} src = {mercy} ></Card>,
        <Card character='lucio' data_id={id?.[8]} onClick={onClick} src = {lucio} ></Card>,
        <Card character='sigma' data_id={id?.[9]} onClick={onClick} src = {sigma} ></Card>,]
        
        
        cards.forEach(element=>newArr.splice(element.props.data_id,1,element));
       
        
        return newArr;
    }
    
    return(
     <>
     <Nav current = {currentScore} high={highScore}></Nav>
      {randomizedCards().map((card)=>{
        return <div key={uniqid()}>{card}</div>
      })}
     </>
    );
    
};