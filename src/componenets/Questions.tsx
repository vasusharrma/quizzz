interface QuestionsProps {
  question: string
  options: string[]
  qnum: number
}

const Questions = ({ question, options, qnum }: QuestionsProps) => {
  return (
    <div className='bg-white w-fit shadow-lg shadow-white/30 space-y-3  h-fit p-8 rounded-md mt-10'>
      <h1 className='text-xl font-bold'>Question {qnum + 1} of 5</h1>
      <p className='text-gray-500 italic font-bold'>{question}</p>
      <div className='flex flex-col space-y-3'>
        {options.map((option, index) => {
          return (
            <button
              type='button'
              className='border border-black text-left px-6 py-3 rounded-md text-black'
              key={index}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Questions
