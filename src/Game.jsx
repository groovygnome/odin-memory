import { useState, useEffect } from 'react'
import Card from './Card.jsx';

function Game() {
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [srcs, setSrcs] = useState([]);

  const ids = ['uASq98lHjXAjzXjHoU', 'ueiw3W1K6vhI1JQmZS', 'ip68eDWiINMQh3qysS', '11e0I7RkHWMRh9mnQn', 'EcHz4euPUu6qxDrwBN', 'ZztwJB3iqzY1kdJrQ4', 'hSNz9fIBjMOv7l9RTT', 'f5IZQpCCgM1qwnngDD', 'krEdN3bN7IqPg6FDf3', 'NlWF3bS9f3rq5PQXha', 'QLLDW4amWtHzu27ETS', 'Vr3HlfDMnSllDmnNNh']
  const urlStart = 'https://api.giphy.com/v1/gifs/';
  const urlEnd = '?api_key=xuFmWuuE2y1DtWQzJqOjPkkpNwBWulMh';
  useEffect(() => {
    ids.forEach((id) => {
      let url = urlStart + id + urlEnd;
      fetch((url), { mode: 'cors' })
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          setSrcs((prevSrcs) => [...prevSrcs, response.data.images.original.url]);

        });
    });
  }, []);

  const handleClick = (key) => {
    if (picked.includes(key)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setPicked([]);
    } else {
      setScore(score + 1);
      let newPicked = [...picked, key];
      setPicked(newPicked);
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
    <Card characterName={'Viktor'} key={0} id={'uASq98lHjXAjzXjHoU'} onClick={handleClick} source={srcs[0]} />,
    <Card characterName={'Pantheon'} key={1} id={'ueiw3W1K6vhI1JQmZS'} onClick={handleClick} source={srcs[1]} />,
    <Card characterName={'Vayne'} key={2} id={'ip68eDWiINMQh3qysS'} onClick={handleClick} source={srcs[2]} />,
    <Card characterName={'Samira'} key={3} id={'11e0I7RkHWMRh9mnQn'} onClick={handleClick} source={srcs[3]} />,
    <Card characterName={'Irelia'} key={4} id={'EcHz4euPUu6qxDrwBN'} onClick={handleClick} source={srcs[4]} />,
    <Card characterName={'Lucian'} key={5} id={'ZztwJB3iqzY1kdJrQ4'} onClick={handleClick} source={srcs[5]} />,
    <Card characterName={'Akshan'} key={6} id={'hSNz9fIBjMOv7l9RTT'} onClick={handleClick} source={srcs[6]} />,
    <Card characterName={'Yasuo'} key={7} id={'f5IZQpCCgM1qwnngDD'} onClick={handleClick} source={srcs[7]} />,
    <Card characterName={'Caitlyn'} key={8} id={'krEdN3bN7IqPg6FDf3'} onClick={handleClick} source={srcs[8]} />,
    <Card characterName={'Nunu'} key={9} id={'NlWF3bS9f3rq5PQXha'} onClick={handleClick} source={srcs[9]} />,
    <Card characterName={'Teemo'} key={10} id={'QLLDW4amWtHzu27ETS'} onClick={handleClick} source={srcs[10]} />,
    <Card characterName={'Seraphine'} key={11} id={'Vr3HlfDMnSllDmnNNh'} onClick={handleClick} source={srcs[11]} />,
  ]

  characterArray = shuffleArray(characterArray);

  return (
    <>
      <div className='scoreBoard'>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
      <div className='characterArray'>
        {characterArray}
      </div>
    </>
  )
}

export default Game
