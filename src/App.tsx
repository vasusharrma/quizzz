import Gameover from './componenets/Gameover'
import QuestionCard from './componenets/QuestionCard'
import Startgame from './componenets/Startgame'
import { Gametype } from './types/GameTypes'
import { useState } from 'react'

function App() {
  const [gameState, setGameState] = useState<Gametype>('start')

  function gameStart(): void {
    setGameState('playing')
  }

  return (
    <div>
      {gameState === 'start' && <Startgame onStart={gameStart} />}
      {gameState === 'playing' && <QuestionCard />}
      {gameState === 'end' && <Gameover />}
    </div>
  )
}

export default App
