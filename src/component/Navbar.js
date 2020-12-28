import React from 'react'
import {Navbar, NavbarContent,NavbarBrand ,NavItem , NavbarText,NavbarNav,Img,PageWrapper,ContentWrapper,Button,toggleDarkmode} from "reacthalfmoon";
import {Link} from "react-router-dom";
import logo from "../logo.png"

function Navbarhead() {
    return (
        <div>
                        <PageWrapper withNavbar>
                <Navbar>
                    <NavbarContent>
                        <NavbarBrand>
                            <Img src={logo} alt="brand" />
                            <span className="font-weight-bolder">TAG</span>Heuer
                        </NavbarBrand>
                          <NavbarNav>
                          <Link to="/"><NavItem>Home</NavItem></Link>
                            <Link to="/About"><NavItem>About</NavItem></Link>
                            <Link to="/Products"><NavItem>Products</NavItem></Link>
                            <Link to="/Items"> <NavItem>Items </NavItem></Link>
                        </NavbarNav>
                        
                    </NavbarContent>
                    <Button className="ml-auto" onClick={toggleDarkmode}>&#x1F319;</Button>
                </Navbar>
            </PageWrapper>
        </div>
    )
}

export default Navbarhead
