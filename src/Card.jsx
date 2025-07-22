import { useState, useEffect } from 'react'
import './App.css'

function Card({ characterName, title, onClick }) {
  const [picked, setPicked] = useState(false)
  const url = 'https://api.giphy.com/v1/gifs/translate?api_key=xuFmWuuE2y1DtWQzJqOjPkkpNwBWulMh&s=' + title;
  const [source, setSource] = useState('');

  useEffect(() => {
    fetch((url), { mode: 'cors' })
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        setSource(response.data.images.original.url);
      });
  }, []);

  return (
    <>
      <div onClick={() => { onClick(picked); setPicked(true); }}>
        <img src={source} />
        <h2>{characterName}</h2>
      </div >
    </>
  )
}

export default Card
