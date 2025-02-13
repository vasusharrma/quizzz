import { CheckIcon } from 'lucide-react'

interface QuestionsProps {
  question: string
  options: string[]
  qnum: number
  ocorrect: number
  selectOption: null | number
  onAnswerSelect: (index: number) => void
}

const Questions = ({
  question,
  options,
  qnum,
  ocorrect,
  selectOption,
  onAnswerSelect
}: QuestionsProps) => {
  function getButtonClass(index: number): string {
    if (selectOption === null) {
      return 'hover:bg-gray-100'
    }
    if (index === ocorrect) {
      return 'bg-green-100 border-green-500'
    }
    if (selectOption === index) {
      return 'bg-red-100 border-red-500'
    }

    return 'opacity-50'
  }
  return (
    <div className='bg-white min-w-10 w-[50rem] shadow-md  space-y-3   px-8 py-12 rounded-xl mt-10'>
      <h1 className='text-xl font-bold'>Question {qnum + 1} of 5</h1>
      <p className='text-gray-500 italic font-bold'>{question}</p>
      <div className='flex flex-col space-y-3'>
        {options.map((option, index) => {
          return (
            <button
              type='button'
              className={`flex justify-between border  border-black text-left px-6 py-3 rounded-md text-black ${getButtonClass(index)}`}
              key={index}
              onClick={() => onAnswerSelect(index)}
            >
              <span>{option} </span> <CheckIcon />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Questions
