import { useState } from 'react'
import Filter from './components/Filter'  
import DisplayPersons from './components/DisplayPersons'
import InputForm from './components/InputForm'

const Title = ({ text }) =>(
  <h2>{text}</h2>
) 

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')  
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setNewSearchValue] = useState('')

  //handle add button click
  const addName= (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }
    
    //check if newName exists in persons array        
    console.log(persons.some(e => e.name.toLowerCase() === newName.toLowerCase())) //value check 
    if(persons.some(e => e.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  //handle user input in name form
  const handleNameInput = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  //handle user input in number form
  const handleNumberInput = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  //handle user input in search field
  const handleSearchInput= (event) => {
    console.log(event.target.value)
    setNewSearchValue(event.target.value)    
  }

  return (
    <div>
      <Title text='Phonebook' />
      <Filter handler={handleSearchInput} value={searchValue} />
      <Title text='Add a New' />
      <InputForm handleNameInput={handleNameInput} handleNumberInput={handleNumberInput}
        newName={newName} newNumber={newNumber} addName={addName} />
      <Title text='Numbers' />      
      <DisplayPersons searchValue={searchValue} persons={persons} />      
    </div>
  )
}

export default App;
