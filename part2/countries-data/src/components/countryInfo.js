
const CountryInfo = ({ array }) =>{
    console.log(array.languages);
    console.log(Object.values(array.languages))
    
    return(
        <div>
           <h1>{array.name.common}</h1>           
           <p>Capital: {array.capital}</p>
           <p>Area: {array.area}</p>
           <h3>languages:</h3>
            <ul>
                {Object.values(array.languages).map(languages => <li>{languages}</li>)}
            </ul>
            
            <img src={array.flags.png} alt= {`Flag of ${array.name}`} />
        </div>
    )

};

export default CountryInfo;