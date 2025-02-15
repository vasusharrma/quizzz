import Gameover from './componenets/Gameover'
import QuestionCard from './componenets/QuestionCard'
import Startgame from './componenets/Startgame'
import { Gametype, cardel } from './types/GameTypes'
import { useState } from 'react'

function App() {
  const [gameState, setGameState] = useState<Gametype>('playing')
  // const [score, setScore] = useState<number>(0)
  // const [timer, setTimer] = useState<number>(30)

  const [selectOption, setSelectOption] = useState<cardel>({ soption: null, cardNum: null })

  function handleStart(): void {
    setGameState('playing')
  }

  function handleAnswer(index: number, qnum: number): void {
    setSelectOption({ soption: index, cardNum: qnum })
  }

  return (
    <>
      {gameState === 'start' && <Startgame onStart={handleStart} />}
      {gameState === 'playing' && (
        <QuestionCard onAnswerSelect={handleAnswer} selectOption={selectOption} />
      )}
      {gameState === 'end' && <Gameover />}
    </>
  )
}

export default App
