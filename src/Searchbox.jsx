import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function Searchbox({updateInfo}){
    let [city, setCity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;   /////


    let getWeatherInfo = async ()=>{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
    //    console.log(jsonResponse);

       let result = {
            city: city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feels_like:jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
       }
       console.log(result);
       return result;
    }

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeatherInfo();
        updateInfo(info);
    };

    return (
        <div className='Searchbox' style={{marginBottom: 40}}>
            <form onSubmit={handleSubmit}>

                <TextField id="city" label="city name"
                variant="outlined"
                required
                value={city}
                onChange={handleChange}
                color='white'
                />

                <br /><br />

                <Button variant="contained" type='submit' >
                    Search
                </Button>
            </form>
        </div>
    );
}