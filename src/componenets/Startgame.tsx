import { Play } from 'lucide-react'

interface StartGameProps {
  onStart: () => void
}

const Startgame = ({ onStart }: StartGameProps) => {
  return (
    <div className=' text-center space-y-5 pt-5'>
      <h1 className='text-3xl font-extrabold'>Coding Quiz Game</h1>
      <p>Test your programming knowledge</p>
      <button
        className='flex py-3 px-6 bg-blue-600 text-white  rounded-md font-extrabold  mx-auto'
        onClick={onStart}
      >
        <Play className='w-5 h-5 mr-2' /> <span>Start Quiz</span>
      </button>
    </div>
  )
}

export default Startgame
