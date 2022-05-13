
const Card = ({ cardId, gameState, setGameState, resetGame, title, src, setCurrentScore, random }) => {
  const onClick = () => {
    setGameState(prev => {
      let newState = [...prev]
      if (!prev[cardId]) {
        newState[cardId] = true
        setGameState(newState)
        setCurrentScore(prev => setCurrentScore(prev + 1))
        random()
        return
      }
      resetGame()
    })
  }
       

    
  return (
      <div onClick={() => onClick()}  className='card'>
          <img alt={title} src={src}/>
    </div>
  )
}

export default Card