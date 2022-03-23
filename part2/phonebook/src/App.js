import { useState, useEffect } from 'react';
import Filter from './components/Filter';  
import DisplayPersons from './components/DisplayPersons';
import InputForm from './components/InputForm';
import peopleService from './services/people';

const Title = ({ text }) =>(
  <h2>{text}</h2>
); 

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
    };
           
    //check if newName exists in persons array            
    if(persons.some(e => e.name.toLowerCase() === newName.toLowerCase())){
      const foundPerson = persons.find(e => e.name.toLowerCase() === newName.toLowerCase())
      const updatedObject = {...foundPerson, number: newNumber }
      //if name exists, offer to replace number
      if(window.confirm(`${foundPerson.name} is already added to phonebook, do you want to replace old number with new one?`)){                     
        peopleService
          .update(foundPerson.id, updatedObject)
          .then(returnedPerson => {
            console.log('--->', returnedPerson)
            setPersons(persons.map(person => person.id !== updatedObject.id ? person : returnedPerson))
          })
          setNewName('')
          setNewNumber('')
      }
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
  
  //handle click of delete button
  const removeName =(name, id) => {    
    if(window.confirm(`Are you sure you want to remove ${name}?`)){
      peopleService.remove(id)
      setPersons(persons.filter(person  => person.id !== id)) 
      console.log(persons)
    }
  };

  //handle user input in name form
  const handleNameInput = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  };

  //handle user input in number form
  const handleNumberInput = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  };

  //handle user input in search field
  const handleSearchInput= (event) => {
    console.log(event.target.value)
    setNewSearchValue(event.target.value)    
  };

  return (
    <div>
      <Title text='Phonebook' />
      <Filter handler={handleSearchInput} value={searchValue} />
      <Title text='Add a New' />
      <InputForm handleNameInput={handleNameInput} handleNumberInput={handleNumberInput}
        newName={newName} newNumber={newNumber} addName={addName} />
      <Title text='Numbers' />      
      <DisplayPersons searchValue={searchValue} persons={persons} removeName={removeName} />
    </div>
  )
};

export default App;
