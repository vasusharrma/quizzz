export type Gametype = 'start' | 'playing' | 'end'

export interface Question {
  question: string
  options: string[]
  correct: number
}
