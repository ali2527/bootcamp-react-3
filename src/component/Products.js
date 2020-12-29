import React from 'react'
import watches from "./watches.json"
import {Row ,Col , Container} from "reacthalfmoon"
import {Link} from "react-router-dom";
import "./product.css";

function Products() {
      return (
        <div className="bg-very-dark-dm">
            <Container >
                <Row>
            {Object.keys(watches).map(keyName => {
                return(<Col key={keyName}  size={12} sm={4} className="p-20  ">
                    <div className=" buybutton bg-dark-dm  p-20 h-500">
                    <img src={watches[keyName].img} alt={watches[keyName].name}  className="h-300"/>
                    <div className="h-100">
                    <p className="text-danger font-size-12 text-uppercase">{watches[keyName].edition}</p>
                    <p  className="font-weight-bold font-size-12 "><Link to={`/Products/${keyName}`} className="text-dark text-light-dm">{watches[keyName].name}</Link></p></div>
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
