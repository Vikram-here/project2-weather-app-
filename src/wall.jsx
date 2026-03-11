import { useState } from "react";
import Info from "./info";
import Search from "./search";

export default function Wall(){
    let [info,setInfo]=useState({city:"Delhi",
        temp:18,
        mintemp:20,
        maxtemp:20,
        humidity:20,
        weather:"HOT"});

        let updateInfo=(result)=>{
        setInfo(result);
        }
    return(
    <> 
        <Search updateInfo={updateInfo}></Search>
         <Info info={info}></Info>
         
    </>

    );
}