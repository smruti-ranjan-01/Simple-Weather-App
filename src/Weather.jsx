import { useState } from 'react';
import Searchbox from './Searchbox'
import InfoBox from './infoBox';

export default function Weather(){
    const [weatherinfo,setWeatherinfo] = useState(
        {
            city: "Gadamanatir",
            temp : 31,
            tempMin : 32.05,
            tempMax : 30.05,
            humidity : 33,
            feels_like:28.95,
            weather : "haze",
    })

    let updateInfo = (res)=>{
        setWeatherinfo(res);
    }
    return(
        <div className='Weather'>
            <h1>Weather App </h1>
            <Searchbox updateInfo ={updateInfo}/>
            <InfoBox weatherinfo={weatherinfo}/>
        </div>

    );
}