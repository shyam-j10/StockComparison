import axios from 'axios';
import '../styles/UserComponent.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function UserComponent() {
    const navigate=useNavigate();
    const[data,setName]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8080/gainers')
        .then((response)=>{
            setName(response.data);
            console.log(response.data)
        })
    },[])
    return ( 
        <>  
                <h1 className="text-center">Stocks To Invest!</h1>
                <button className='add' onClick={()=>{
                    navigate('/add')
                }}>Add a Stock</button>
                <table>
                    <thead>
                        <tr className='head'>

                            <td>Name</td>
                            <td id="inc">IncreasePercentage</td>
                            {/* <td>View</td>
                            <td>Edit</td>
                            <td>Delete</td> */}
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            data.map(
                                e =>
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td> {e.increasePercentage}</td>
                                    <button id='one' onClick={()=>navigate('/view',{state:{id:e.id}})}>View</button>
                                    <button id='two'onClick={()=>navigate('/edit',{state:{id:e.id}})}>Edit</button>
                                    <button id='three'onClick={()=>navigate('/delete',{state:{id:e.id}})}>Delete</button>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        </>
     );
}
export default UserComponent;