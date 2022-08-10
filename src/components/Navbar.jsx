import React from 'react'
import NavItem from "./NavItem";

function Navbar(){
    return(
        <nav className="flex justify-between py-5 px-20 shadow-md">
<h3 className="font-bold">FashionCollec</h3>
<ul className="flex gap-5">
    <NavItem menu="Home"/>
    <NavItem menu="Products"/>
    <NavItem menu="Service"/>
    <NavItem menu="About"/>
    <NavItem menu="Contact"/>
</ul>
        </nav>
    );
}

export default Navbar;