import './App.css'
import { Heading } from './components/Heading'
import { Avater } from './components/Avater'
import contacts from './contacts'
import { Card } from './components/Card'
import { Counter } from './components/Counter'
import { Users } from './components/Users'

function App() {

  const consoleLog = () => {
    console.log("Hello World")
  }

  return (
    <>
      <Heading title="My Contact"/>
      <Avater imgURL='https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/347637180_1690058611414478_8310985686478147867_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEPXfAXA187PD0br0v-xA3b3Q36cBLigkLdDfpwEuKCQufjBgsqQ8kdQUEMVv0gK9CW0WONbhDBnWlIdJDIyMdY&_nc_ohc=fPttL8M8zwMAX8hZD3k&_nc_ht=scontent.fdac27-1.fna&oh=00_AfD9ycrShjEkrcsrecuCBqVtegX-AVTZGL4q0K_fgyRfgA&oe=65F0E70C' />
      {contacts.map(contact => <Card key={contact.id} name={contact.name} imgURL={contact.imgURL} phone={contact.phone} email={contact.email}/>)}
      <Counter handleFuntion={consoleLog}/>
      <Users />
    </>
  )
}

export default App