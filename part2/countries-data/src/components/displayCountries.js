import CountryInfo from "./countryInfo";
import Name from './name';

const DisplayCountries = ({ countries, searchValue, handleClick }) => {
    //filter countries using SearchValue
    console.log(countries.filter(e => e.name.common.toLowerCase().includes(searchValue.toLowerCase())));
    let filtered = countries.filter(e => e.name.common.toLowerCase().includes(searchValue.toLowerCase()));
    
    //filter by number of filtered results   
    if (filtered.length === 1){
        return(
            <div>
                {filtered.map(filtered => <CountryInfo key={filtered.name.common} array= {filtered} />)}
            </div>
        )        
    }
    else if (filtered.length > 1 && filtered.length < 10){
        return(
        <div>
            {filtered.map(filtered => <Name key={filtered.name.common} array= {filtered} handleClick={handleClick} />)}            
        </div>
        )
    }
    else {
        return(
            <p>Too many matches, specify filter...</p>
        )
    }
    
};

export default DisplayCountries;