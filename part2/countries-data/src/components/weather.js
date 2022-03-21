const Weather = ({ array, weather }) => {
    console.log('in weather Component')       

    //convert temp from Kelvin to Fahrenheit
    let convertTempF = (temp) => {
        return ((temp - 273.15) * (9.0 / 5.0) + 32).toFixed(0);        
    }
    //convert temp from Kelvin to Celsius
    let convertTempC = (temp) => {
        return (temp - 273.15).toFixed(0);        
    }

    let convertDist = (dist) => {
        return (dist * 2.2369).toFixed(2);        
    }
    
    return(
        <div>
            <h2>Weather in {array.name.common}</h2>                       
            <p>Temperature: {convertTempC(weather.main.temp)}° Celsius / {convertTempF(weather.main.temp)}° Fahrenheit </p>
            <img src= {`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`icon showing ${weather.weather[0].description}`} />
            <p>Humidity: {weather.main.humidity}%</p>      
            <p>Wind Speed: {weather.wind.speed} mps / {convertDist(weather.wind.speed)} mph</p>                                  
        </div>
    )

}

export default Weather;