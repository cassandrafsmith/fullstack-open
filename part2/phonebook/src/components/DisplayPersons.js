import Name from './Name';

const DisplayPersons = ({ persons, searchValue }) => { 
  console.log('in display component')
  
  //filter search results
  console.log(persons.filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase())))
  const filtered = persons.filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase()))
  
  while(searchValue === ''){
    return(
      <div>
        {persons.map(persons => <Name key={persons.name} array= {persons} />)}
      </div>
    )
  }
  return(
    <div>
        {filtered.map(filtered => <Name key={filtered.name} array= {filtered} />)}
      </div>
  )
} 

export default DisplayPersons;