import React from 'react'
import { useParams } from 'react-router-dom'
import watches from "./watches.json"
import {Button } from "reacthalfmoon"

function Items() {
    const  {id} = useParams();
    console.log(id);
    return (
        <div>
                    
                    
                    <img src={watches[id].img} alt={watches[id].name}  className="h-400"/>
                   
                    <p className="text-danger font-size-14 text-uppercase">{watches[id].edition}</p>
                    <p  className="font-weight-bold font-size-16 ">{watches[id].name}</p>
                    <p className="font-size-18 font-weight-bold"> $ {watches[id].price}</p>
                    <br/>
                    <Button size="lg" className="rounded-0  bg-very-dark text-light">Shop In store</Button>
                    </div>
         
   
    )
}

export default Items
