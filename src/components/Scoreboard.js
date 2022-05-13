import {useState,useEffect} from 'react'
const Scoreboard = ({currentScore, bestScore}) => {
  let [noti, setNoti] = useState("")
  useEffect(() => {
        if (currentScore === 0) setNoti("GAME START!!!")
    if (currentScore === 10) setNoti("WON!!!")
  }, [currentScore])
  return (
    <div className='scoreboard'>
      <h4>Current Score: {currentScore}</h4>
      <h4>Best Score: {bestScore}</h4>
      <h4>{noti}</h4>
    </div>
  )
}

export default Scoreboard