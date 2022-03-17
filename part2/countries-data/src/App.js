import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/search';
import DisplayCountries from './components/displayCountries';


function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  //add state here for the country details to display

  //us effect hook to fetch data from API
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

  //add country data to state to use in DisplayCountry

  //handle search term
  const handleSearch =(event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Countries Data App</h1>
      <Search handler={handleSearch} searchValue={searchValue} />
      <DisplayCountries countries={countries} searchValue={searchValue} />
    </div>
  );
}

export default App;
