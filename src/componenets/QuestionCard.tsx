import { QUESTIONS } from '@/data/question'
import Questions from './Questions'
import { cardel } from '@/types/GameTypes'
import { Question } from '@/types/GameTypes'
import { useState } from 'react'

interface QuestionCardProps {
  onAnswerSelect: (index: number, qnum: number) => void
  selectOption: cardel
}

const QuestionCard = ({ onAnswerSelect, selectOption }: QuestionCardProps) => {
  const ques: Question[] = QUESTIONS
  const [qacount, setQacount] = useState<number>(0)
  function doSomething(): void {
    setQacount(0)
  }
  doSomething()
  return (
    <div className='box-border py-20 bg-gray-200 min-h-screen'>
      <Questions
        question={ques[qacount].question}
        options={ques[qacount].options}
        qnum={qacount}
        key={qacount}
        ocorrect={ques[0].correct}
        onAnswerSelect={onAnswerSelect}
        selectOption={selectOption}
        totalQues={QUESTIONS.length}
      />
    </div>
  )
}

export default QuestionCard
