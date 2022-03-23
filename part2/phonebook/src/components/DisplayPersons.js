import Name from './Name';

const DisplayPersons = ({ persons, searchValue, removeName }) => { 
  console.log('in display component')
  
  //filter search results
  console.log(persons.filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase())))
  const filtered = persons.filter(e => e.name.toLowerCase().includes(searchValue.toLowerCase()))
  
  while(searchValue === ''){
    return(
      <ul>
        {persons.map(persons => <Name key={persons.name} array= {persons} removeName={removeName} />)}
      </ul>
    )
  }
  return(
    <ul>
        {filtered.map(filtered => <Name key={filtered.name} array= {filtered} removeName={removeName} />)}
      </ul>
  )
} 

export default DisplayPersons;