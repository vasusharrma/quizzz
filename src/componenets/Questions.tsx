import { CheckCircle, CheckIcon, XCircle } from 'lucide-react'
import { cardel } from '@/types/GameTypes'

interface QuestionsProps {
  question: string
  options: string[]
  qnum: number
  ocorrect: number
  selectOption: cardel
  onAnswerSelect: (index: number, qnum: number) => void
}

const Questions = ({
  question,
  options,
  qnum,
  ocorrect,
  selectOption,
  onAnswerSelect
}: QuestionsProps) => {
  function handleOptionBtn(index: number, qnum: number): void {
    selectOption.soption == null && onAnswerSelect(index, qnum)
    console.log('Questions: ', index, qnum)
  }

  function getButtonClass(index: number): string | void {
    if (selectOption.cardNum === qnum) {
      if (selectOption.soption === null) {
        return 'hover:bg-gray-100'
      }
      if (index === ocorrect) {
        return 'bg-green-100 border-green-500'
      }
      if (selectOption.soption === index) {
        return 'bg-red-100 border-red-500'
      }
      return 'opacity-50 cursor-not-allowed'
    }
  }
  return (
    <div className='bg-white w-[90%] max-w-[50rem] shadow-md  space-y-3   px-8 py-12 rounded-xl mt-10'>
      <h1 className='text-xl font-bold'>Question {qnum + 1} of 5</h1>
      <p className='text-gray-500 italic font-bold'>{question}</p>
      <div className='flex flex-col space-y-3'>
        {options.map((option, index) => {
          return (
            <button
              type='button'
              className={`flex justify-between border  border-black text-left px-6 py-3 rounded-md text-black ${getButtonClass(index)}`}
              key={index}
              onClick={() => {
                handleOptionBtn(index, qnum)
              }}
            >
              <span>{option} </span> {selectOption.soption === null && <CheckIcon />}
              {selectOption.cardNum === qnum && (
                <>
                  {selectOption.soption !== null && ocorrect === index && (
                    <CheckCircle className='text-green-500' />
                  )}
                  {selectOption.soption === index && selectOption.soption !== ocorrect && (
                    <XCircle className='text-red-500' />
                  )}
                </>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Questions
