import React from "react";
import Nav from "./NavBar.styled";
import NavListComponent from "./NavLink/NavList";

const NavBarComponent = () => {
    return (
        <>
            <Nav>
                <NavListComponent />
            </Nav>
        </>
    );
};

export default NavBarComponent;
