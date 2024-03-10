import React from 'react'

interface ChildProps{
          name: string
          email: string
}

export const User: React.FC<ChildProps> = ({name, email}) => {
  return (
    <div className="border border-black border-solid my-8 py-8 text-xl">
          <h1>Name: {name}</h1>
          <h1>Email: {email}</h1>
    </div>
  )
}
