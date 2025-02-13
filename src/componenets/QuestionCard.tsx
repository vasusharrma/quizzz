import { QUESTIONS } from '@/data/question'
import Questions from './Questions'

interface QuestionCardProps {
  onAnswerSelect: (index: number) => void
  selectOption: number | null
}

const QuestionCard = ({ onAnswerSelect, selectOption }: QuestionCardProps) => {
  return (
    <div className='box-border flex flex-col w-[100%] items-center  gap-7 justify-center bg-gray-50 min-h-screen'>
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
