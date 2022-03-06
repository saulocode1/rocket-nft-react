import React from "react";
import ButtonComponent from "../Button/Button";
import Logo from "../Elements/Logo";
import NavBarComponent from "../Navbar.jsx/NavBar";
import HeaderBar, { HeaderDiv } from "./Header.styled";

const HeaderComponent = () => {
    return (
        <>
            <HeaderBar>
                <HeaderDiv>
                    <Logo />
                    <NavBarComponent />
                    <ButtonComponent />
                </HeaderDiv>
            </HeaderBar>
        </>
    );
};

export default HeaderComponent;
