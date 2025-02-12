import { QUESTIONS } from '@/data/question'
import Questions from './Questions'

const QuestionCard = () => {
  return (
    <div className='box-border flex flex-wrap gap-7 justify-center bg-slate-200 h-screen'>
      {QUESTIONS.map((ques, index) => {
        return (
          <Questions question={ques.question} options={ques.options} qnum={index} key={index} />
        )
      })}
    </div>
  )
}

export default QuestionCard
