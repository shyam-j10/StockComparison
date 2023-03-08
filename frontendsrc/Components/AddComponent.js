import axios from 'axios'
import '../styles/AddComponent.css';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function AddComponent(){
    const navigate=useNavigate();
    const [name,setName]=useState();
    const [beforePrice,setBeforePrice]=useState();
    const [afterPrice,setAfterPrice]=useState();
    const [increasePercentage,setIncreasePercentage]=useState();
    const [topGain,setTopGain]=useState();

    const validateUser=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:8080/gainers`,{
            name,beforePrice,afterPrice,increasePercentage,topGain
        })
        navigate('/')
    }

    return (
        <>
            <table>
                <tr>
                    <td>Stock Name:</td>
                    <td>
                        <input type="text" value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        placeholder="Enter stock name"/>
                    </td>
                </tr>
                <tr>
                    <td>Before Price:</td>
                    <td>
                        <input type="Number" value={beforePrice}
                        onChange={(e)=>setBeforePrice(e.target.value)}
                        placeholder="Enter before price"/>
                    </td>
                </tr>
                <tr>
                    <td>After Price:</td>
                    <td>
                        <input type="Number" value={afterPrice}
                        onChange={(e)=>setAfterPrice(e.target.value)}
                        placeholder="Enter after price"/>
                    </td>
                </tr>
                <tr>
                    <td>Increase Percentage:</td>
                    <td>
                        <input type="Number" value={increasePercentage}
                        onChange={(e)=>setIncreasePercentage(e.target.value)}
                        placeholder="Enter increase percentage"/>
                     </td>
                </tr>
                <tr>
                    <td>Top gain:</td>
                    <td>
                        <input type="Number" value={topGain}
                        onChange={(e)=>setTopGain(e.target.value)}
                        placeholder="Enter top gain"/>
                        </td>
                </tr>
                <tr>
                    <button className="submit" onClick={validateUser}>Submit</button>
                </tr>
            </table>
        </>
    )
}
