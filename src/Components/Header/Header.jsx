import React from "react";
import ButtonComponent from "../Button/Button";
import Logo from "../Elements/Logo";
import NavBarComponent from "../Navbar.jsx/NavBar";
import HeaderBar from "./Header.styled";

const HeaderComponent = () => {
    return (
        <>
            <HeaderBar>
                <Logo />
                <NavBarComponent/>
                <ButtonComponent/>
            </HeaderBar>
        </>
    );
};

export default HeaderComponent;
