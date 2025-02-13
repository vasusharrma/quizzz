import Gameover from './componenets/Gameover'
import QuestionCard from './componenets/QuestionCard'
import Startgame from './componenets/Startgame'
import { Gametype } from './types/GameTypes'
import { useState } from 'react'

function App() {
  const [gameState, setGameState] = useState<Gametype>('start')
  const [selectOption, setSelectOption] = useState<number | null>(null)

  function handleStart(): void {
    setGameState('playing')
  }

  function handleAnswer(index: number): void {
    setSelectOption(index)
  }

  return (
    <div>
      {gameState === 'start' && <Startgame onStart={handleStart} />}
      {gameState === 'playing' && (
        <QuestionCard onAnswerSelect={handleAnswer} selectOption={selectOption} />
      )}
      {gameState === 'end' && <Gameover />}
    </div>
  )
}

export default App
