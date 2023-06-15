import { useEffect, useState } from "react";
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
import { Nav } from '../components/Nav';
export const Display = ()=>{
    
    const [id,setId] = useState([]);
    const [currentScore,setCurrentScore] = useState(0);
    const [highScore,setHighScore] = useState(0);
    const [memory,setMemory] = useState([]);
    const onClick = (e)=>{
        let characterName = e.target.attributes.character.nodeValue;
        randomize();
        //console.log(e.target.attributes.character.nodeValue);
        if(!memory.includes(characterName)){
            console.log('im here');
            setMemory(memory.concat(characterName))
            setCurrentScore(currentScore+1)
        }else{
            console.log('im in else');
            setMemory([]);
            setCurrentScore(0);
            console.log('game over');
        }
        console.log(memory);
        
        
    }
//   TODO: Fix hanzo disappearing on click :(
    
    const randomize = ()=>{ 
          let randomizedArray = [];
       
        while(randomizedArray.length < 10){ 
            let randomNum = Math.floor(Math.random()*10)
            if(!randomizedArray.includes(randomNum)){
                randomizedArray.push(randomNum);
             }
        };
         setId(randomizedArray);
        
    
    }
    
      useEffect(()=>{
        setId([0,1,2,3,4,5,6,7,8,9])
    },[])


    useEffect(()=>{
        if(currentScore>highScore){
            setHighScore(currentScore);
        }
    },[currentScore])

//     useEffect(()=>{
//         setCurrentScore(currentScore+1)
//        if(currentScore>highScore){
//            setHighScore(currentScore);
//        }
//    },[highScore])
   

    const randomizedCards= ()=>{
        
        const newArr = new Array(4);
        newArr.fill(0)
      const cards = [<Card character='sombra' id={id[0]} onClick={onClick} src = {sombra} ></Card>, 
        <Card character='bastion' id={id[1]} onClick={onClick} src = {bastion}></Card>,
        <Card character='winton' id={id[2]} onClick={onClick} src = {winton} ></Card>,
        <Card character='tracer' id={id[3]} onClick={onClick} src = {tracer} ></Card>,
        <Card character='ashe' id={id[4]} onClick={onClick} src = {ashe} ></Card>,
        <Card character='hanzo' id={id[5]} onClick={onClick} src = {hanzo} ></Card>,
        <Card character='reaper' id={id[6]} onClick={onClick} src = {reaper} ></Card>,
        <Card character='mercy' id={id[7]} onClick={onClick} src = {mercy} ></Card>,
        <Card character='lucio' id={id[8]} onClick={onClick} src = {lucio} ></Card>,
        <Card character='sigma' id={id[9]} onClick={onClick} src = {sigma} ></Card>,]
        
        cards.forEach(element=>newArr.splice(element.props.id,1,element));
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