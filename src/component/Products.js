import React from 'react'
import watches from "./watches.json"
import {Row ,Col , Container} from "reacthalfmoon"
import "./product.css";

function Products() {
    console.log(Object.keys(watches));
    return (
        <div>
            <h1>Products</h1>
            <Container>
                <Row>
            {Object.keys(watches).map(keyName => {
                return(<Col key={keyName}  size={4} className="p-20 ">
                    <div className=" buybutton bg-dark-dm p-20 h-500">
                    <img src={watches[keyName].img} alt={watches[keyName].name}  className="h-300"/>
                    <div className="h-100">
                    <p className="text-danger font-size-12 text-uppercase">{watches[keyName].edition}</p>
                    <p  className="font-weight-bold font-size-12">{watches[keyName].name}</p></div>
                    <div className="bg-dark p-10 text-light "> $ {watches[keyName].price}</div>
                    </div>
                    </Col>)
            })}
            </Row>
            </Container>
        </div>
    )
}

export default Products
