import React from 'react';
import {Button, Navbar} from "@blueprintjs/core";
import '../Style/App.css';
import {Link} from "react-router-dom";
export default function myNavbar () {
    return(
        <Navbar>
            <Navbar.Group >
                <Navbar.Heading>Я ХОЧУ НА РАБОТУ</Navbar.Heading>
                <Link  to='/SignIn'><Button className="bp3-minimal" icon="home" text="Sign in" /></Link>
                <Navbar.Divider />
                <Link to='/Page2'><Button className="bp3-minimal" icon="document" text="Page 2" /></Link>
                <Navbar.Divider />
                <Link to='/Page3'><Button className="bp3-minimal" icon="document" text="Page 3" /></Link>
                <Link to='/goOut'><Button className="bp3-minimal" icon="document" text="Sign out" /></Link>
            </Navbar.Group>
        </Navbar>
    )
}