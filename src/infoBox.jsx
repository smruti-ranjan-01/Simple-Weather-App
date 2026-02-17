import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// import SunnyIcon from '@mui/icons-material/Sunny';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({weatherinfo}){
    const INIT_URL =
    "https://images.unsplash.com/photo-1633120851371-403ecc2d81ec?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let info = weatherinfo;

    const HOT_URL ="https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL ="https://plus.unsplash.com/premium_photo-1709310749399-fc68800e1c76?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbnklMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="infoBox">
            <div>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span" >
                        <div>
                            {/* <h2>{info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <SunnyIcon/> : <AcUnitIcon/>} </h2> */}
                            <h2>{info.city}  </h2>
                            <p>Temprature : {info.temp}&deg;C</p>
                            <p>Humidity : {info.humidity}&deg;C</p>
                             <p>min temp : {info.tempMin}&deg;C</p>
                            <p>max temp : {info.tempMax}&deg;C</p>
                            <p>The weather can be described as <b><i>{info.weather}</i></b>, feels like : {info.feels_like}&deg;C</p>
                        </div>
                    </Typography>
                </CardContent>

                </Card>
            </div>
        </div>
    );
}
