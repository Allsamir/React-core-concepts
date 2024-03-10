import React from 'react';
import '../App.css'

export const Avater: React.FC<{imgURL: string}> = ({imgURL}) => {
  return (
    <div>
      <img src={imgURL} alt="Avater" className="img mx-auto py-8 " />
    </div>
  )
}
