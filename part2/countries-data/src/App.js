import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/search';
import DisplayCountries from './components/displayCountries';


function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
    
  //us effect hook to fetch data from countries API
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, []);
  console.log('render', countries.length, 'notes');
    
    //handle search term
  const handleSearch =(event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  //handle button clicks
  const handleClick = (event) => {    
    event.preventDefault();    
    setSearchValue(event.target.name);
  };

  return (
    <div className="App">
      <h1>Countries Data App</h1>
      <Search handler={handleSearch} searchValue={searchValue} />
      <DisplayCountries countries={countries} searchValue={searchValue} handleClick={handleClick} />
    </div>
  );
}

export default App;
