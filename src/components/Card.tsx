import React from'react'
import '../App.css'
import 'tailwindcss/tailwind.css'

interface ChildProps {
  name: string
  imgURL: string
  phone: string
  email: string
}

export const Card: React.FC<ChildProps> = ({name, imgURL, phone, email}) => {
  return (
    <div className="card my-8 mx-auto rounded-3xl">
          <h1 className="text-2xl font-bold">{name}</h1>
          <img src={imgURL} alt="Avater" className="rounded-full w-40 mx-auto my-8"/>
          <div className="flex justify-between">
            <span>{phone}</span>
            <span>{email}</span>
          </div>
    </div>
  )
}
