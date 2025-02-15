import { QUESTIONS } from '@/data/question'
import Questions from './Questions'
import { cardel } from '@/types/GameTypes'

interface QuestionCardProps {
  onAnswerSelect: (index: number, qnum: number) => void
  selectOption: cardel
}

const QuestionCard = ({ onAnswerSelect, selectOption }: QuestionCardProps) => {
  return (
    <div className='box-border flex flex-col  items-center   justify-center bg-gray-50 min-h-screen'>
      {QUESTIONS.map((ques, index) => {
        return (
          <Questions
            question={ques.question}
            options={ques.options}
            qnum={index}
            key={index}
            ocorrect={ques.correct}
            onAnswerSelect={onAnswerSelect}
            selectOption={selectOption}
          />
        )
      })}
    </div>
  )
}

export default QuestionCard
