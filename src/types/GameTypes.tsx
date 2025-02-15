export type Gametype = 'start' | 'playing' | 'end'

export interface Question {
  question: string
  options: string[]
  correct: number
}

export type cardel = {
  soption: number | null
  cardNum: number | null
}

export interface QuestionsProps {
  question: string
  options: string[]
  qnum: number
  ocorrect: number
  selectOption: cardel
  onAnswerSelect: (index: number, qnum: number) => void
  totalQues: number
}
