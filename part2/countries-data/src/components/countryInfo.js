import { useState, useEffect} from 'react';
import axios from 'axios';
import Weather from './weather'; 

const CountryInfo = ({ array }) =>{
    const [weather, setWeather] = useState([]);
    const [ready, setReady] =useState(false);
    const apiKey = process.env.REACT_APP_API_KEY
        
    console.log('right before weather useEffect')
        
    useEffect(() => {      
        console.log('weather useEffect start')
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${array.capital}&appid=${apiKey}`)
        .then(response => {
            console.log('weather promise fulfilled')
            setWeather(response.data) 
            setReady(true)  
            console.log(ready, '1st')                    
        })        
    }, [apiKey, array.capital, ready]); //the useEffect depends on array.name.common & apiKey 

    
    console.log(array.languages);
    console.log(Object.values(array.languages))
    console.log(weather) 
    console.log(ready, '2nd')
   
    return(
        <div>
            <h1>{array.name.common}</h1>           
            <p>Capital: {array.capital}</p>
            <p>Area: {array.area}</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(array.languages).map(languages => <li key={array.latlng}>{languages}</li>)}
            </ul>            
            <img src={array.flags.png} alt= {`Flag of ${array.name}`} />   
            {ready && <Weather array={array} weather={weather}  />}   {/*conditionally render Weather [see note] */}
        </div>
    )      
};

export default CountryInfo;


/* NOTE:  The useEffect hook in this component caused quite a bit of trouble for me. The asyncronous callback 
was not occuring before the Weather component was called. To deal with this issue, I had to conditional 
render the Weather component using the state flag, 'ready'. */