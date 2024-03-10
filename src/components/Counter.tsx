import React from 'react'
import 'tailwindcss/tailwind.css'
import { useState } from 'react'

interface ChildProps {
  handleFuntion: () => void;
}

export const Counter: React.FC<ChildProps> = ({handleFuntion}) => {
          const [count, setCounter] = useState<number>(0);

          // const handleIncrease = () => {
          //           setCounter(count => count + 1)
          // }

          const handleDecrease = () => {
                    setCounter(count => count - 1)
          }

  return (
    <>
          <h1 className="text-2xl text-black font-semibold">{count}</h1>
          <button type="button" onClick={() => {
           setCounter(count => count + 1)
           handleFuntion();
          }} className="text-lg border border-solid border-black p-4 bg-slate-500 text-white rounded-full">+</button> <button type="button" onClick={handleDecrease} className="text-lg border border-solid border-black p-4 bg-slate-500 text-white rounded-full">-</button>
    </>
  )
}

/* 1.Make a component name it Count
   2.I need to useState to update the value
   3.Need to handle the funtion
 */