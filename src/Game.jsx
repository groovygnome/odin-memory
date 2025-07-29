import { useState } from 'react'
import './App.css'
import Card from './Card.jsx';

function Game() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0);

  const handleClick = (selected) => {
    if (selected) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
    } else {
      setScore(score + 1);
    }
    characterArray = shuffleArray(characterArray);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let characterArray = [
    <Card characterName={'Viktor'} key={0} id={'uASq98lHjXAjzXjHoU'} onClick={handleClick} />,
    <Card characterName={'Pantheon'} key={1} id={'ueiw3W1K6vhI1JQmZS'} onClick={handleClick} />,
    <Card characterName={'Vayne'} key={2} id={'ip68eDWiINMQh3qysS'} onClick={handleClick} />,
    <Card characterName={'Samira'} key={3} id={'11e0I7RkHWMRh9mnQn'} onClick={handleClick} />,
    <Card characterName={'Irelia'} key={4} id={'EcHz4euPUu6qxDrwBN'} onClick={handleClick} />,
    <Card characterName={'Lucian'} key={5} id={'ZztwJB3iqzY1kdJrQ4'} onClick={handleClick} />,
    <Card characterName={'Akshan'} key={6} id={'hSNz9fIBjMOv7l9RTT'} onClick={handleClick} />,
    <Card characterName={'Yasuo'} key={7} id={'f5IZQpCCgM1qwnngDD'} onClick={handleClick} />,
    <Card characterName={'Caitlyn'} key={8} id={'krEdN3bN7IqPg6FDf3'} onClick={handleClick} />,
    <Card characterName={'Nunu'} key={9} id={'NlWF3bS9f3rq5PQXha'} onClick={handleClick} />,
    <Card characterName={'Teemo'} key={10} id={'QLLDW4amWtHzu27ETS'} onClick={handleClick} />,
    <Card characterName={'Seraphine'} key={11} id={'Vr3HlfDMnSllDmnNNh'} onClick={handleClick} />,
  ]

  characterArray = shuffleArray(characterArray);

  return (
    <>
      <div>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <div>
        {characterArray}
      </div>
    </>
  )
}

export default Game
