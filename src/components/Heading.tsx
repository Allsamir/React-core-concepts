import React from "react"
import 'tailwindcss/tailwind.css'

export const Heading: React.FC<{title:string}> = ({title}) => {
  return (
          <h1 className="text-4xl">{title}</h1>
  )
}
