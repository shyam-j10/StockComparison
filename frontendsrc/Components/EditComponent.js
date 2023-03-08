import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/EditComponent.css';
import axios from "axios";
function EditComponent() {
    const navigate =useNavigate();
    const location=useLocation();

    const[id,setId]=useState();
    const[stock,setStock]=useState([]);
    const[name,setName]=useState();
    const[beforePrice,setBeforePrice]=useState();
    const[afterPrice,setAfterPrice]=useState();
    const[increasePercentage,setIncreasePercentage]=useState();
    const[topGain,setTopGain]=useState();

    useEffect(() => {
        axios.get(`http://localhost:8080/gainers/${location.state.id}`)
        .then((res)=>{
            console.log(res.data)
            setId(res.data.id);
            setStock(res.data);
            setName(res.data.name)
            setBeforePrice(res.data.beforePrice);
            setAfterPrice(res.data.afterPrice);
            setIncreasePercentage(res.data.increasePercentage);
            setTopGain(res.data.topGain);
        })
    }, []);

    async function validateUser(e){
        e.preventDefault();
       await axios.post("http://localhost:8080/gainers",{
        id:id,
        name:name,
        beforePrice:beforePrice,
        afterPrice:afterPrice,
        increasePercentage:increasePercentage,
        topGain:topGain
        }
        )
        alert("success");
        setName();
        setBeforePrice();
        setAfterPrice();
        setIncreasePercentage();
        setTopGain();
        navigate("/")
    
    }
    return ( 
        <>
            {stock&&
                <>
                <form>
                    <h3>Edit {name}</h3>
                        <div className="mb-3">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="Name" 
                        value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label>Before Price:</label>
                        <input type="number" className="form-control" placeholder="Patient Age"
                        value={beforePrice}
                            onChange={(e)=>setBeforePrice(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label>After Price:</label>
                        <input type="number" className="form-control" placeholder="Sex" 
                        value={afterPrice}
                            onChange={(e)=>setAfterPrice(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label>IncreasePercentage:</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Patient Address"
                            value={increasePercentage}
                            onChange={(e)=>setIncreasePercentage(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                        <label>Top Gain:</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter password"
                            value={topGain}
                            onChange={(e)=>setTopGain(e.target.value)}/>
                        </div>
                        <button type="submit" onClick={validateUser}>Submit</button>
                    </form>
                </>
            }
        </>
     );
}

export default EditComponent;