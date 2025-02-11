import React from 'react'

type Props = {
  background_color: string
  fontSize: number
  padding?: number
}

const Button: React.FC<Props> = ({ background_color, fontSize, padding }) => {
  return (
    <div>
      <button className={`${background_color} text-white font-bold  px-3 py-2 text-xl mt-3`}>
        Tap me
      </button>
      <p>{padding}</p>
      <p>{fontSize.toFixed(3)}</p>
    </div>
  )
}

export default Button
