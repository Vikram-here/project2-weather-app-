 import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
 

 export default function Search({updateInfo}){
     let[city,setCity]=useState("");
     let[err,setErr]=useState(false);

let getweather=async(lt,lo)=>{

  try{
 const url="https://api.openweathermap.org/data/2.5/weather?lat"
 
 const api="b6b428a6238da80c2b980817af7ba0e1";
        let response=await fetch( `${url}=${lt}&lon=${lo}&appid=${api}&units=metric`);
       let res= await response.json();
       
         let data={
       city:city,
        temp:res.main.temp,
        mintemp:res.main.temp_min,
        maxtemp:res.main.temp_min,
        humidity:res.main.humidity,
        weather:res.weather[0].description

       }
        
        return data;
        }catch(err){
          throw err;
        }
        

     }
     let geocode =async ()=>{
      try{
const url="https://api.positionstack.com/v1/forward?access_key=36ae166a013a36969ab0d42f6fd796fb&query"
        let response=await fetch(`${url}=${city}`);
       let res= await response.json();
        let lat=res.data[0].latitude;
         let lon=res.data[0].longitude;
        return getweather(lat,lon);
      }catch(err){
        throw err;
      }
     
     }

    
     let handlechange=(event)=>{
        setCity(event.target.value);
      }

      let sub=async (event)=>{
        try{
      event.preventDefault();
        let result= await geocode();
        
        updateInfo(result);
        setCity("");
        setErr(false)

        }catch(err){
         setErr(!false)
        }
        
        
      }
    return(
    <div>
      <h2>Weather Report</h2>
        <form onSubmit={sub}>
        <TextField id="standard-basic" label="CITY" variant="standard" value={city} onChange={handlechange} />
        <br></br><br></br>
        <Button variant="contained" type="submit"  >search</Button>
         {err && <p style={{color:"red"}}>No such place information exist in our record</p>}
        </form>    
         
    </div>
    
);
}
  