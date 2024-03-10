import React from 'react'
import { useState, useEffect } from 'react'
import { User } from './User'

interface Users {
          name: string
          id: number
          email: string
}

export const Users: React.FC = () => {

          const [users, setUsers] = useState<Users[]>([])

          useEffect(() => {
                    fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(data => setUsers(data))
                    .catch(err => console.error(err))
          }, []) 
          

  return (
    users.map(user => <User key={user.id} name={user.name} email={user.email}/>)
  )
}
