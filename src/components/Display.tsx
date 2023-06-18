import { ChangeEvent, useEffect, useState } from "react";
import { Card } from "./Card";
// import sombra from '../imgs/sombra.png'
import tracer from "../imgs/tracer2.png";
import genji from "../imgs/genji.png";
import bastion from "../imgs/bastion.jpg";
import ashe from "../imgs/ashe.jpg";
import reaper from "../imgs/reaper.jpg";
import junkrat from "../imgs/junkrat.jpg";
import hanzo from "../imgs/hanzo.png";
import widow from "../imgs/widow.jpg";
import lucio from "../imgs/lucio.jpg";
import dva from "../imgs/dva.jpg";
import uniqid from "uniqid";
import { Nav } from "./Nav";
import React from "react";
export const Display = () => {
  type Id = Array<number>;
  type Score = number;
  type Memory = Array<number>;

  const [id, setId] = useState<Id>([]);
  const [displayCards, setDisplayCards] = useState<boolean>(true);
  const [win, setWin] = useState<string>("hidden");
  const [defeat, setDefeat] = useState<string>("hidden");
  const [currentScore, setCurrentScore] = useState<Score>(0);
  const [highScore, setHighScore] = useState<Score>(0);
  const [memory, setMemory] = useState<Memory>([]);
  const onClick = (e: any) => {
    let characterAttribute = e.target?.attributes[1];

    const characterName = characterAttribute?.nodeValue;
    console.log(characterName);

    randomize();

    if (!memory.includes(characterName)) {
      setMemory(memory.concat(characterName));
      setCurrentScore(currentScore + 1);
    } else if (memory.includes(characterName)) {
      setMemory([]);
      setCurrentScore(0);
      setDefeat("defeat");
      setTimeout(() => {
        setDefeat("defeat show");
      }, 200);
      setDisplayCards(false);
    }
  };

  const randomize = () => {
    let randomizedArray: Array<number> = [];

    while (randomizedArray.length < 10) {
      let randomNum = Math.floor(Math.random() * 10);
      if (!randomizedArray.includes(randomNum)) {
        randomizedArray.push(randomNum);
      }
    }
    setId(randomizedArray);
  };
  useEffect(() => {
    setId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (currentScore > highScore) {
      setHighScore(currentScore);
    }
    if (currentScore === 10) {
      setWin("win");
      timer = setTimeout(() => {
        setWin("win show");
      }, 200);

      setDisplayCards(false);
    }
    return () => clearTimeout(timer);
  }, [currentScore]);

  const playAgain = () => {
    if (defeat == "defeat show") {
      setDefeat("hidden");
      setDisplayCards(true);
    } else {
      location.reload();
    }
  };
  const randomizedCards = () => {
    const newArr = new Array(10);
    newArr.fill(0);
    const cards = [
      <Card
        character="dva"
        data_id={id?.[0]}
        onClick={onClick}
        src={dva}
      ></Card>,
      <Card
        character="bastion"
        data_id={id?.[1]}
        onClick={onClick}
        src={bastion}
      ></Card>,
      <Card
        character="genji"
        data_id={id?.[2]}
        onClick={onClick}
        src={genji}
      ></Card>,
      <Card
        character="tracer"
        data_id={id?.[3]}
        onClick={onClick}
        src={tracer}
      ></Card>,
      <Card
        character="ashe"
        data_id={id?.[4]}
        onClick={onClick}
        src={ashe}
      ></Card>,
      <Card
        character="hanzo"
        data_id={id?.[5]}
        onClick={onClick}
        src={hanzo}
      ></Card>,
      <Card
        character="reaper"
        data_id={id?.[6]}
        onClick={onClick}
        src={reaper}
      ></Card>,
      <Card
        character="junkrat"
        data_id={id?.[7]}
        onClick={onClick}
        src={junkrat}
      ></Card>,
      <Card
        character="lucio"
        data_id={id?.[8]}
        onClick={onClick}
        src={lucio}
      ></Card>,
      <Card
        character="widow"
        data_id={id?.[9]}
        onClick={onClick}
        src={widow}
      ></Card>,
    ];

    cards.forEach((element) =>
      newArr.splice(element.props.data_id, 1, element)
    );

    return newArr;
  };

  return (
    <>
      <div className={win}>
        VICTORY
        <button
          onClick={playAgain}
          className="text-cyan-400 font-sans text-5xl bg-slate-500 pt-4 pr-4 pl-4 pb-4 mt-44 rounded-lg hover:bg-black"
        >
          Play Again
        </button>
      </div>
      <div className={defeat}>
        DEFEAT
        <button
          onClick={playAgain}
          className="text-cyan-400 font-bold font-sans text-5xl bg-slate-500 pt-4 pr-4 pl-4 pb-4 mt-44 rounded-lg hover:bg-black"
        >
          Play Again
        </button>
      </div>
      <Nav current={currentScore} high={highScore}></Nav>
      <main className="grid grid-cols-5 gap-6">
        {displayCards
          ? randomizedCards().map((card) => {
              return <React.Fragment key={uniqid()}>{card}</React.Fragment>;
            })
          : null}
      </main>
    </>
  );
};
