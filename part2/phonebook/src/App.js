import { useState } from 'react'

const DisplayPersons = ({ persons }) => {
  return(
    <div>
      {persons.map(persons => <Name key={persons.name} persons= {persons} />)}
    </div>
  )
}

 const Name = ({ persons }) => (
   <p>{persons.name}</p>
 )

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')  

  //handle add button click
  const addName= (event) => {
    event.preventDefault();
    const personObject = {name: newName}
    
    //check if newName exists in persons        
    console.log(persons.some(e => e.name.toLowerCase() === newName.toLowerCase())) //value check 
    if(persons.some(e => e.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  //handle name form input
  const handleInput = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange= {handleInput} value={newName} />
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>      
      <DisplayPersons persons={persons} />      
    </div>
  )
}

export default App;
