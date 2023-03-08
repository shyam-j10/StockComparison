import axios from "axios";
import '../styles/ViewComponent.css';
import {useEffect,useState} from "react";
import { useLocation } from "react-router-dom"
export default function ViewComponent(){
    const location=useLocation();
    const [value,setValue]=useState();
    useEffect(()=>{
        axios.get(`http://localhost:8080/gainers/${location.state.id}`)
        .then((res)=>{
            setValue(res.data);
            console.log(value)}
            )
    },[])
    return (
        <>{
            value&&<div className="container">
            
            <h1>Stock Name:<span>{value.name}</span></h1>
            <h1>Before Price:<span>{value.beforePrice}</span></h1>
            <h1>After Price:<span>{value.afterPrice}</span></h1>
            <h1>Increase Percentage:<span>{value.increasePercentage}</span></h1>
            <h1>Top Gain:<span>{value.topGain}</span></h1>
            </div>
        }
        </>
    )
}