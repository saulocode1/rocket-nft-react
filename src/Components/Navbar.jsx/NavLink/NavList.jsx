import React from "react";
import { NavItem, NavLink, NavList } from "./NavLink.styled";

const NavListComponent = () => {
    return (
        <>
            <NavList>
                <NavLink>
                    <NavItem>Comprar NFT</NavItem>
                </NavLink>
                <NavLink>
                    <NavItem>Sobre</NavItem>
                </NavLink>
                <NavLink>
                    <NavItem>FAQ</NavItem>
                </NavLink>
            </NavList>
        </>
    );
};

export default NavListComponent;
