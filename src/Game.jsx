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
    shuffledArray = shuffleArray(shuffledArray);
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  const characterArray = [
    <Card characterName={'Viktor'} title={'viktor league'} onClick={handleClick} />,
    <Card characterName={'Pantheon'} title={'pantheon league'} onClick={handleClick} />,
    <Card characterName={'Mordekaiser'} title={'mordekaiser league'} onClick={handleClick} />,
    <Card characterName={'Samira'} title={'samira league'} onClick={handleClick} />,
    <Card characterName={'Rell'} title={'rell league'} onClick={handleClick} />,
    <Card characterName={'Aatrox'} title={'aatrox league'} onClick={handleClick} />,
    <Card characterName={'Gnar'} title={'gnar league'} onClick={handleClick} />,
    <Card characterName={'Jayce'} title={'jayce league'} onClick={handleClick} />,
    <Card characterName={'Caitlyn'} title={'caitlyn league'} onClick={handleClick} />,
    <Card characterName={'Veigar'} title={'veigar league'} onClick={handleClick} />,
    <Card characterName={'Nami'} title={'nami league'} onClick={handleClick} />,
    <Card characterName={'Seraphine'} title={'seraphine league'} onClick={handleClick} />,
  ]

  let shuffledArray = shuffleArray(characterArray);

  return (
    <>
      <div>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <div>
        {shuffledArray}
      </div>
    </>
  )
}

export default Game
