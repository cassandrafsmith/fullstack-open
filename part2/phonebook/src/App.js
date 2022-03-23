import { useState, useEffect } from 'react'
import axios from 'axios';
import Filter from './components/Filter'  
import DisplayPersons from './components/DisplayPersons'
import InputForm from './components/InputForm'
import peopleService from './services/people'

const Title = ({ text }) =>(
  <h2>{text}</h2>
) 

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')  
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setNewSearchValue] = useState('')

  //effect hook to fetch data from json-server 
  useEffect(() => {
    console.log('effect')
    peopleService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response)
        console.log('after setPersons in getAll')
      })
  }, [])
  console.log(persons)

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
    //add person to server and to 'person' state
    else{
      peopleService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
      })
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
