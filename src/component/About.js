import React from 'react'
import cover2 from "../cover2.webp"
import about1 from "../about1.webp"
import about2 from "../about2.webp"
import about3 from "../about3.webp"
import about4 from "../about4.webp"
import {Row ,Col , Container} from "reacthalfmoon"
import "./about.css"

function About() {
    return (
        <div>
            <img src={cover2} alt="cover" width="100%"/><br/><br/>
           <h4 className="font-weight-bold">ABOUT TAG HEUER</h4> 
           <h5 className="">We believe that victories in life result from the choices we make every fraction of second.</h5> <br/><br/>
           <div className="aboutdiv2">
               <p className="text-white">Today, our ambassadors reflect our mindset, our taste for challenge, and the ability to surpass oneself. #DontCrackUnderPressure is much more than a claim: it is a state of mind.</p>
           </div>
           <br/><br/><br/><br/><br/><br/>
           <Container className="aboutdiv3  py-20">
               <Row>
                   <Col >
                   <br/><br/>
                   <h5 className="text-left font-weight-bold">THE FUEL OF TAG HEUER</h5>
                   <p className="text-left">The ultimate reference in luxury chronograph watches, TAG Heuer’s high-precision timing innovations have kept pace with the evolution of sports since 1860. Our timepieces make it possible to capture every fraction of a second of a performance. From the wrists of the drivers who have marked the history of motor racing to your wrist, TAG Heuer watches have a lasting impact on their time and their era. Shortly after its inception, TAG Heuer introduced the Mikrograph - a mechanical chronograph five times more accurate than any other - and became the official timekeeper for the most famous sports competitions. With the arrival of motorsports, TAG Heuer became the first watchmaking brand to sponsor the Formula 1 World Championship since its creation.</p>
                   </Col>
                   <Col>
                   <img src={about1} alt="cover" width="450px"/>
                     <img src={about2} alt="cover" width="300px" height="300px" className="aboutimg"/>
                   </Col>
               </Row>           
               
           </Container>
           <br/><br/><br/><br/><br/><br/><br/><br/>
           <Container className="aboutdiv4 py-20">
               <Row>
               <Col>
                   <img src={about3} alt="cover" width="450px"/>
                     <img src={about4} alt="cover" width="350px" height="300px" className="aboutimg2"/>
                   </Col>
                   <Col >
                   <br/><br/>
                   <h5 className="text-left font-weight-bold">TIME BY TAG HEUER: HIGH PERFORMANCE AND CONTROL</h5>
                   <p className="text-left">Innovation as a profession of faith since 1860: from the first luxury Connected Watch in 2015 through improving the oscillating pinion in 1887. From inventing the first self-winding crown mechanism to the first-ever double magnetic tourbillon. Four production sites, our own manufacture: TAG Heuer has continued pushing the limits of watchmaking technology with innovations and savoir-faire. TAG Heuer has spearheaded innovations that have left their mark on history and still define the foundations of the watchmaking industry today. Each of our Swiss-made watches exudes our know-how and our high precision standards.</p>
                   </Col>
                   
               </Row>           
               
           </Container>
        </div>
    )
}

export default About
