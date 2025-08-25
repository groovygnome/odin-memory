
function Card({ characterName, id, onClick, source }) {
  return (
    <>
      <div onClick={() => { onClick(id); }}>
        <img src={source} />
        <h2>{characterName}</h2>
      </div >
    </>
  )
}

export default Card
