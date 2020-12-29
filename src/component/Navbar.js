import React from 'react'
import {Navbar, NavbarContent,NavbarBrand ,NavItem ,NavbarNav,Img,PageWrapper,Button,toggleDarkmode} from "reacthalfmoon";
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
                          <NavbarNav className="ml-auto">
                          <Link to="/"><NavItem>HOME</NavItem></Link>
                            <Link to="/About"><NavItem>ABOUT</NavItem></Link>
                            <Link to="/Products"><NavItem>TIMEPIECES</NavItem></Link>
                        </NavbarNav>
                        
                    </NavbarContent>
                    <Button className="ml-auto" onClick={toggleDarkmode}>&#x1F319;</Button>
                </Navbar>
            </PageWrapper>
        </div>
    )
}

export default Navbarhead
