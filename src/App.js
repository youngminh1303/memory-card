import Scoreboard from "./components/Scoreboard"
import Card from "./components/Card"
import { useEffect, useState } from "react"

import agito from "./images/agito.png"
import kuuga from "./images/kuuga.png"
import ryuki from "./images/ryuki.png"
import blade from "./images/blade.png"
import faiz from "./images/faiz.png"
import hibiki from "./images/hibiki.png"
import kabuto from "./images/kabuto.png"
import deno from "./images/deno.png"
import kiva from "./images/kiva.png"
import decade from "./images/decade.png"
import driver from "./images/driver.png"


function App() {
  let [currentScore, setCurrentScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)
  let [gameState, setGameState] = useState([false, false, false ,false, false, false, false , false , false, false])

  const shuffle = () => {
    setCardList([...cardList].sort(() => Math.random() - 0.5))
    }

  const resetGame = () => {
    shuffle()
    setCurrentScore(0)
    setGameState([false, false, false, false, false, false, false, false, false, false])
  }
    
   
  let [cardList,setCardList] =  useState([
    <Card cardId={0} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle}  key={kuuga} setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Kuuga" src={kuuga}/>,
    <Card cardId={1} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={agito} setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Agito" src={agito} />,
    <Card cardId={2} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={ryuki} setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Ryuki" src={ryuki} />,
    <Card cardId={3} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={blade} setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Blade" src={blade} />,
    <Card cardId={4} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={faiz} setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider 555" src={faiz} />,
    <Card cardId={5} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={hibiki} setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Hibiki" src={hibiki} />,
    <Card cardId={6} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={kabuto} setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Kabuto" src={kabuto} />,
    <Card cardId={7} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={deno}  setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Den-O" src={deno} />,
    <Card cardId={8} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={kiva}  setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Kiva" src={kiva} />,
    <Card cardId={9} gameState={gameState} setGameState={setGameState} resetGame={resetGame}  random={shuffle} key={decade} setCurrentScore={setCurrentScore} currentScore={currentScore} title="Kamen rider Decade" src={decade} />, 
  ])



  
  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore)
  },[currentScore,bestScore])

  useEffect(() => console.log(gameState), [gameState])
  return (
    <div className="App">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />      
      <div className="cardboard">
        {cardList}
      </div>

      <div onClick={resetGame} className="driver">
            <img src={driver} alt="driver"/>
      </div>

    </div>
  );
}

export default App;
