import React from 'react'
import {Button} from "reacthalfmoon"
import "./home.css"

function Home() {
    return (
        <div> 
            <div className="hero p-30">

                <h6 className="text-white">HOLIDAY SEASON</h6>
                <h1 className="text-white">FIND A GIFT FOR ALL OF YOUR LOVED ONES</h1>

                <Button className=" rounded-0 p-5 w-200 h-50 text-white herobtn">SHOP OUR SELECTION</Button>
            </div>
        </div>
    )
}

export default Home
