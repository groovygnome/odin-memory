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
  };

  const characterArray = [
    { characterName: 'Gwyn', title: 'gwyn dark souls' },
    { characterName: 'Gwyndolyn', title: 'gwyndolyn dark souls' },
    { characterName: 'Gwynevere', title: 'gwynevere dark souls' },
    { characterName: 'Nameless King', title: 'nameless king dark souls' },
    { characterName: 'Ornstein', title: 'ornstein' },
    { characterName: 'Smough', title: 'smough' },
    { characterName: 'Lucia', title: 'lucia-dmc' },
    { characterName: 'Dante', title: 'dante' },
    { characterName: 'Dante', title: 'dante' },
    { characterName: 'Dante', title: 'dante' },
    { characterName: 'Dante', title: 'dante' },
    { characterName: 'Dante', title: 'dante' },
  ]

  return (
    <>
      <div>
        {characterArray.map((character) => {
          return (
            <Card characterName={character.characterName} title={character.title} onClick={handleClick} />
          )
        })}
      </div>
    </>
  )
}

export default Game
